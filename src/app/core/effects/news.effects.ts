import 'rxjs/add/operator/switchMapTo';
import 'rxjs/add/observable/of';

import { Injectable } from '@angular/core';
import { Actions, Effect, toPayload } from '@ngrx/effects';
import {Action, Store} from '@ngrx/store';
import {Observable} from 'rxjs';

import * as news from '../store/actions/news.action'

import { normalize } from 'normalizr';
import {newsSchema} from '../constants/schemas';
import {State} from '../store';
import {NewsApi} from "../sdk/services/custom/News";

@Injectable()
export class NewsEffects {
  constructor(
    private newsApi: NewsApi,
    private actions$: Actions,
    private store: Store<State>,
  ) {}

  @Effect()
  fetchNews$: Observable<Action> = this.actions$
    .ofType(news.ActionTypes.FETCH_NEWS)
    .map(action => action.payload)
    .switchMap(filter => this.newsApi
      .find(filter)
      .map(res => {
        const items = {news: res};
        const schema = { news: [newsSchema] };
        const normalizedData = normalize(items, schema);
        return new news.FetchNewsSuccessAction(normalizedData)
      })
      .catch(err => Observable.of(new news.FetchNewsFailAction(err))));
}
