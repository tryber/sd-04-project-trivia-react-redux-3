import React from 'react';
import { Link } from 'react-router-dom';

export default function Ranking() {
  const players = JSON.parse(localStorage.getItem('ranking'));
  console.log('players', players);
  return (
    <div>
      <Link to="/">
        <button data-testid="btn-go-home"> Home</button>
      </Link>
    </div>
  );
}
