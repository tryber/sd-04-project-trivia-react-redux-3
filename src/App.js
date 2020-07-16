import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import Configuration from './components/Configuration';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/Login" component={Login} />
          <Route path="/Configuration" component={Configuration} />
        </Switch>
      </div>
    </Router>
  );
}
