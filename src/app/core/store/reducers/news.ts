import * as news from '../actions/news.action';

export interface NewsState {
  loading: boolean;
  news: string[];
  err: any
}

const initialState: NewsState = {
  loading: false,
  news: [],
  err: null
};

export function newsReducer(state = initialState, action): NewsState {
  switch (action.type) {
    case news.ActionTypes.FETCH_NEWS: {
      return Object.assign({}, state, {loading: true})
    }
    case news.ActionTypes.FETCH_NEWS_SUCCESS: {
      return Object.assign({}, state, {news: action.payload.result.news})
    }
    case news.ActionTypes.FETCH_NEWS_FAIL: {
      return Object.assign({}, state, {err: action.payload})
    }
    default: {
      return state;
    }
  }
}

export const getNewsIds = (state: NewsState) => state.news;
