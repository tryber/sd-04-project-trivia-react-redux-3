import { REQUEST_TRIVIA, RECEIVE_TRIVIA_SUCCESS, RECEIVE_TRIVIA_FAILURE, RESET_TRIVIA } from '../types/typeTrivia';

const initialState = {
  IsFetching: false,
  results: [],
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case REQUEST_TRIVIA:
      return { ...state, IsFetching: true };
    case RECEIVE_TRIVIA_SUCCESS:
      return {
        gameIsFetching: false,
        results: [payload.results],
      };
    case RECEIVE_TRIVIA_FAILURE:
      return { ...state, IsFetching: false, error: payload };
    case RESET_TRIVIA:
      return initialState;
    default:
      return state;
  }
};