import React from 'react';
import {BrowserRouter, Switch, Route } from 'react-router-dom'
import logo from './logo.svg';
import Main from './MainRouting'
import './App.css';
import './scss/app.scss';
import MainRouting from './MainRouting';
import LoginRouting from './LoginRouting';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/login" component={LoginRouting} />
          <Route path="/" component={MainRouting} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
