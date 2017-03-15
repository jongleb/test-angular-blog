import * as events from '../actions/events.action';
import {LoopBackFilter} from "../../sdk/models/BaseModels";

export interface EventsState {
  loading: boolean;
  events: string[];
  err: any;
  first: boolean,
  filter?: LoopBackFilter
}

const initialState: EventsState = {
  loading: false,
  events: [],
  err: null,
  first: true,
  filter: {
    limit: 10,
    skip: 0
  }
};

export function eventsReducer(state = initialState, action): EventsState {
  switch (action.type) {
    case events.ActionTypes.UPDATE_FILTER_AND_FETCH: {

      let payload = action.payload;
      let filter = state.filter;

      let skip = payload.skip === null && !state.first
        ? filter.skip + filter.limit: filter.skip;

      return Object.assign({}, state, {
        first: false,
        filter: {
          limit: payload.limit || filter.limit,
          skip
        }
      })
    }
    case events.ActionTypes.FETCH_EVENTS: {
      return Object.assign({}, state, {loading: true})
    }
    case events.ActionTypes.FETCH_EVENTS_SUCCESS: {
      return Object.assign({}, state, {events: action.payload.result.events})
    }
    case events.ActionTypes.FETCH_EVENT_FAIL: {
      return Object.assign({}, state, {err: action.payload})
    }
    default: {
      return state;
    }
  }
}

export const getEventsIds = (state: EventsState) => state.events;
