import cryptEmail from '../services/cryptoGravatarAPI';

export const LOG_INTO = 'LOG_INTO';

export const logInto = (login) => ({
  type: LOG_INTO,
  ...login,
  urlGravatar: cryptEmail(login.emailGravatar),
});
