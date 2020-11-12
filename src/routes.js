import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/Login';
import StartPage from './pages/StartPage';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/start" exact component={StartPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
