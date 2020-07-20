import cryptEmail from '../services/cryptoGravatarAPI';

export const LOG_INTO = 'LOG_INTO';
export const UPDATE_SCORE = 'UPDATE_SCORE';

export const logInto = (login) => ({
  type: LOG_INTO,
  ...login,
  urlGravatar: cryptEmail(login.emailGravatar),
});

export const updateScore = (score) => ({
  type: UPDATE_SCORE,
  score,
});
