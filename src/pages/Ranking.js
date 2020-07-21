import React from 'react';
import { Link } from 'react-router-dom';

export default function Ranking() {
  const players = JSON.parse(localStorage.getItem('ranking'));
  players.sort((a, b) => b.score - a.score);
  return (
    <div>
      <h2 data-testid="ranking-title">Ranking</h2>
        {players.map((player, index) => {
          console.log('player',player);
          return (
          <li key={`${index}`}>
            <img src={player.picture} alt="imagem do gravatar" />
            <span data-testid={`player-name-${index}`}>{player.name}</span>
            <span data-testid={`player-score-${index}`}> | {player.score}</span>
          </li>
        )})}
      <Link to="/">
        <button data-testid="btn-go-home">Home</button>
      </Link>
    </div>
  );
}