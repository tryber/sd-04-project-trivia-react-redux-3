import React from 'react';
import { Link } from 'react-router-dom';

export default function Ranking() {
  const players = JSON.parse(localStorage.getItem('ranking'));
  players.sort((a, b) => b.score - a.score);
  const renderPlayers = () =>
    players.map((element, index) => (
      <li key={`${element.name}`}>
        <img src={element.picture} alt="imagem do gravatar" />
        <span data-testid={`player-name-${index}`}>{element.name}</span>
        <span data-testid={`player-score-${index}`}> | {element.score}</span>
      </li>
    ));
  return (
    <div>
      <h2 data-testid="ranking-title">Ranking</h2>
      <ol>{renderPlayers()}</ol>
      <Link to="/">
        <button data-testid="btn-go-home"> Home</button>
      </Link>
    </div>
  );
}
