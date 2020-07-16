import React from 'react';
import { useSelector } from 'react-redux';

const LogoUser = () => {
  const { urlGravatar } = useSelector((state) => state.login);

  return (
    <div>
      <img src={urlGravatar} alt='logo' />
    </div>
  );
};

export default LogoUser;
