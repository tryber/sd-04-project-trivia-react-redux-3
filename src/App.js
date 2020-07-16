import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import logo from './trivia.png';
import Login from './components/Login';
import Configuration from './components/Configuration';
import './App.css';

export default function App() {
  return (
      <Router>
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>SUA VEZ</p>
      </header> */}
        <Switch> 
          <Route path="/Login" component={Login} />
          <Route path="/Configuration" component={Configuration} />
        </Switch>
    </div>
      </Router>
  );
}
