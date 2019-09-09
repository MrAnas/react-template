import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Login from './pages/login';

export default function Main() {
  return (
    <main>
      <Switch>
        <Route exact path='/login' component={Login}/>
      </Switch>
    </main>
  );
}