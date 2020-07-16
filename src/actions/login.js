import cryptEmail from '../services/cryptoGravatarAPI';

export const LOG_INTO = 'LOG_INTO';

export const logInto = (login) =>
{
  return {
    ...login,
    type: LOG_INTO,
    urlGravatar: cryptEmail(login.emailGravatar),
  };
};
