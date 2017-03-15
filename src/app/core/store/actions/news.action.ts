import { Action } from '@ngrx/store';
import {type} from '../../utils/ngrx-action.util';
import {NewsInterface} from "../../sdk/models/News";


export const ActionTypes = {
  FETCH_NEWS: type('[News] Fetch News'),
  FETCH_NEWS_SUCCESS: type('[News] Fetch News Success'),
  FETCH_NEWS_FAIL: type('[News] Fetch News Fail')
};

export class FetchNewsAction implements Action {
  type = ActionTypes.FETCH_NEWS;
}

export class FetchNewsSuccessAction implements Action {
  type = ActionTypes.FETCH_NEWS_SUCCESS;
  constructor(public payload: any){}
}

export class FetchNewsFailAction implements Action {
  type = ActionTypes.FETCH_NEWS_FAIL;
  constructor(public payload: any){}
}

export type Actions = FetchNewsAction
  | FetchNewsSuccessAction
  | FetchNewsFailAction;
