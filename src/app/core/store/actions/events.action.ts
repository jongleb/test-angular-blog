import { Action } from '@ngrx/store';
import {type} from '../../utils/ngrx-action.util';
import {NewsInterface} from "../../sdk/models/News";
import {LoopBackFilter} from "../../sdk/models/BaseModels";
import {EventsInterface} from "../../sdk/models/Events";


export const ActionTypes = {
  UPDATE_FILTER_AND_FETCH: type('[Events] Update Filter And Fetch'),
  CONCAT_EVENTS: type('[Events] Concat Events'),
  FETCH_EVENTS: type('[Events] Fetch Events'),
  FETCH_EVENTS_SUCCESS: type('[Events] Fetch Events Success'),
  FETCH_EVENT_FAIL: type('[Events] Fetch Events Fail')
};

export class UpdateFilterAndfetchAction implements Action {
  type = ActionTypes.UPDATE_FILTER_AND_FETCH;
  constructor(public payload?: LoopBackFilter){}
}

export class ConcatEventsAction implements Action {
  type = ActionTypes.CONCAT_EVENTS;
  constructor(public payload: any){}
}

export class FetchEventsAction implements Action {
  type = ActionTypes.FETCH_EVENTS;
}

export class FetchEventsSuccessAction implements Action {
  type = ActionTypes.FETCH_EVENTS_SUCCESS;
  constructor(public payload: any){}
}

export class FetchEventsFailAction implements Action {
  type = ActionTypes.FETCH_EVENT_FAIL;
  constructor(public payload: any){}
}


export type Actions = FetchEventsAction
  | FetchEventsSuccessAction
  | FetchEventsFailAction
  | UpdateFilterAndfetchAction
  | ConcatEventsAction;
