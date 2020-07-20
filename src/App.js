import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Configuration from './pages/Configuration';
import Game from './pages/Game';
import Ranking from './pages/Ranking';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/Configuration" component={Configuration} />
          <Route path="/Game" component={Game} />
          <Route path="/Ranking" component={Ranking} />
        </Switch>
      </div>
    </Router>
  );
}
