import { REQUEST_CATEGORY, RECEIVE_CATEGORY_SUCCESS, RECEIVE_CATEGORY_FAILURE } from './types';

const initialState = {
  isFetching: false,
  categories: [], 
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case REQUEST_CATEGORY:
      return { ...state, isFetching: true };
    case RECEIVE_CATEGORY_SUCCESS:
      return { isFetching: false, categories: [...payload.trivia_categories] };
    case RECEIVE_CATEGORY_FAILURE:
      return { ...state, isFetching: false, error: payload };
    default:
      return state;
  }
};
