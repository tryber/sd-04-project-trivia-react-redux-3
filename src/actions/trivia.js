import { getTrivia } from '../services/triviaAPI';
import { REQUEST_TRIVIA, RECEIVE_TRIVIA_SUCCESS, RECEIVE_TRIVIA_FAILURE } from '../types/typeTrivia';

const requestTrivia = () => ({
  type: REQUEST_TRIVIA,
});

const requestTriviaSuccess = (data) => ({
  type: RECEIVE_TRIVIA_SUCCESS,
  payload: data,
});

const receiveTriviaFailure = (error) => ({
  type: RECEIVE_TRIVIA_FAILURE,
  payload: error,
});

export default function fetchTrivia(token, category, difficulty, type) {
  return (dispatch, state) => {
    const { token: { token } } = state();
    console.log('token', token);
    dispatch(requestTrivia());
    return getTrivia(token, category, difficulty, type)
      .then(
        (data) => dispatch(requestTriviaSuccess(data)),
        (error) => dispatch(receiveTriviaFailure(error.message)),
      );
  };
}
