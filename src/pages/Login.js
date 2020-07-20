import React from 'react';
import FormLogin from '../components/FormLogin';
import LogoUserHooks from '../components/LogoUserHooks';
import Game from '../pages/Game';

const Login = () => (
  <div>
    <LogoUserHooks />
    <FormLogin />
    <Game />
  </div>
);

export default Login;
