import { getTrivia } from '../../../services/triviaAPI';
import { REQUEST_TRIVIA, RECEIVE_TRIVIA_SUCCESS, RECEIVE_TRIVIA_FAILURE, VALIDATE_TOKEN, RESET_TRIVIA } from './types';

const requestTrivia = () => ({
  type: REQUEST_TRIVIA,
});

const requestTriviaSuccess = (data) => ({
  type: RECEIVE_TRIVIA_SUCCESS,
  payload: data,
});

const resultTokenValidate = (data) => ({
  type: VALIDATE_TOKEN,
  payload: data,
});

const receiveTriviaFailure = (error) => ({
  type: RECEIVE_TRIVIA_FAILURE,
  payload: error,
});

export const resetTrivia = () => ({ type: RESET_TRIVIA });

export function validateToken() {
  return (dispatch, state) => {
    const { token: { token: tokenT }, settings : { category, difficulty, type } } = state();
    dispatch(requestTrivia());
    return getTrivia(tokenT, category, difficulty, type)
      .then(
        (data) => dispatch(resultTokenValidate(data)),
        (error) => dispatch(receiveTriviaFailure(error.message)),
      );
  };
}

export default function fetchTrivia() {
  return (dispatch, state) => {
    const { token: { token: tokenT }, settings : { category, difficulty, type } } = state();
    dispatch(requestTrivia());
    return getTrivia(tokenT, category, difficulty, type)
      .then(
        (data) => dispatch(requestTriviaSuccess(data)),
        (error) => dispatch(receiveTriviaFailure(error.message)),
      );
  };
}
