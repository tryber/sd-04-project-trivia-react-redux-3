import React from 'react';
import { Link } from 'react-router-dom';

const Ranking = () => {
  const players = JSON.parse(localStorage.getItem('ranking'));
  players.sort((a, b) => b.score - a.score);
  const player = () =>
    players.map((element, index) =>
        <li key={`${element.name}-${index}`}>
          <img src={element.picture} alt="foto-perfil" />
          <p data-testid={`player-name-${index}`}>Jogador: {element.name}</p>
          <p data-testid={`player-score-${index}`}>Pontos: {element.score}</p>
        </li>
    );

  return (
    <div>
      <h2 data-testid="ranking-title">Ranking</h2>
      <ol>{player()}</ol>
      <Link data-testid="btn-go-home" to="/">Go home</Link>
    </div>
  );
};

export default Ranking;