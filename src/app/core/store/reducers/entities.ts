export interface EntitiesState {
  news: {},
  events: {}
}

const initialState: EntitiesState = {
  news: {},
  events: {}
};

export function entitiesReducer(state = initialState, action): EntitiesState {

  if (action.payload && action.payload.entities) {
    console.log(action.payload);
    return Object.assign({}, state, action.payload.entities);
  }
  return state;
}

export const getNewsEntities = (state: EntitiesState) => state.news;
export const getEventsEntities = (state: EntitiesState) => state.events;
