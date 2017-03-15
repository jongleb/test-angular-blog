import 'rxjs/add/operator/switchMapTo';
import 'rxjs/add/observable/of';

import { Injectable } from '@angular/core';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import {Action, Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import * as events from '../store/actions/events.action'

import { normalize } from 'normalizr';
import {eventSchema} from '../constants/schemas';
import {State, getEventsState, getEntitiesState, getEventsList} from '../store';
import {NewsApi} from "../sdk/services/custom/News";
import {EventsApi} from "../sdk/services/custom/Events";

@Injectable()
export class EventsEffects {
  constructor(
    private eventsApi: EventsApi,
    private actions$: Actions,
    private store: Store<State>,
  ) {}

  @Effect()
  updateFilterAndfetch$: Observable<Action> = this.actions$
    .ofType(events.ActionTypes.UPDATE_FILTER_AND_FETCH)
    .map(action => action.payload)
    .map(filter => new events.FetchEventsAction());

  @Effect()
  fetchEvents$: Observable<Action> = this.actions$
    .ofType(events.ActionTypes.FETCH_EVENTS)
    .withLatestFrom(this.store.select(getEventsState))
    .map(latest => latest[1])
    .map(state => state.filter)
    .switchMap(filter => this.eventsApi
      .find(filter)
      .map(res => new events.ConcatEventsAction(res))
      .catch(err => Observable.of(new events.FetchEventsFailAction(err)))
    );

  @Effect()
  concatEvents$: Observable<Action> = this.actions$
    .ofType(events.ActionTypes.CONCAT_EVENTS)
    .map(action => action.payload)
    .withLatestFrom(this.store.select(getEventsList))
    .map(data => {
      const [res, list] = data;
      const concat = [...res, ...list];
      const items = {events: concat};
      const schema = { events: [eventSchema] };
      const normalizedData = normalize(items, schema);
      return new events.FetchEventsSuccessAction(normalizedData);
    })

}

