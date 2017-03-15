import "rxjs/add/operator/switchMapTo";
import "rxjs/add/observable/of";
import {Injectable} from "@angular/core";
import {Actions, Effect} from "@ngrx/effects";
import {Action, Store} from "@ngrx/store";
import {Observable} from "rxjs";

import * as home from "../store/actions/home.action";
import * as news from '../store/actions/news.action';
import * as events from '../store/actions/events.action';

import {State, getEventsState} from "../store";
import {EventsApi} from "../sdk/services/custom/Events";

@Injectable()
export class Homeffects {
  constructor(private eventsApi: EventsApi,
              private actions$: Actions,
              private store: Store<State>,) {
  }

  @Effect()
  fetchAllDataAction$: Observable<Action> = this.actions$
    .ofType(home.ActionTypes.FETCH_ALL_DATA)
    .mergeMap(action => [
      new events.UpdateFilterAndfetchAction({limit: 3}),
      new news.FetchNewsAction({limit: 3})
    ]);

}

