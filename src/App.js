import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Settings from './pages/Settings';
import Game from './pages/Game';
import Feedback from './pages//Feedback';
import Ranking from './pages/Ranking';

import './App.css';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Login} />
          <Route path="/Settings" component={Settings} />
          <Route path="/Game" component={Game} />
          <Route path="/Feedback" component={Feedback} />
          <Route path="/Ranking" component={Ranking} />
        </Switch>
      </div>
    </Router>
  );
}
