import { REQUEST_TRIVIA, RECEIVE_TRIVIA_SUCCESS, RECEIVE_TRIVIA_FAILURE, RESET_TRIVIA } from '../types/typeTrivia';

const initialState = {
  isFetching: false,
  trivia: {
    response_code: -1,
    results: [],
  },
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case REQUEST_TRIVIA:
      return { ...state, isFetching: true };
    case RECEIVE_TRIVIA_SUCCESS:
      return {
        isFetching: false,
        trivia: { responseCode: payload.responseCode, results: [...payload.results] },
      };
    case RECEIVE_TRIVIA_FAILURE:
      return { ...state, isFetching: false, error: payload };
    case RESET_TRIVIA:
      return initialState;
    default:
      return state;
  }
};
