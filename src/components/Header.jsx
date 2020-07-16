import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const { name } = useSelector((state) => state.login.player);
  const { score } = useSelector((state) => state.login.player);
  const { urlGravatar } = useSelector((state) => state.login);

  return (
    <div>
      <img src={urlGravatar} alt="gravatarPicture" data-testid="header-profile-picture" />
      <p data-testid="header-player-name">{name}</p>
      <p data-testid="header-score"> {score}</p>
    </div>

  );
};

export default Header;