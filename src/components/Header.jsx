import React from 'react';
import { useSelector } from 'react-redux';

const Header = () => {
  const { score, assertions, name, picture } = useSelector((state) => state.login);
  return (
    <div>
      <img src={picture} alt="gravatarPicture" data-testid="header-profile-picture" />
      <p data-testid="header-player-name">{name}</p>
      <p data-testid="header-score">{score}</p>
      <p>{assertions}</p>
    </div>
  );
};

export default Header;
