import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Todo from './Todo';
import Todos from './Todos';

const AppMain = () =>
  <main>
    <Switch>
      <Route path="/todos" component={Todos} />
      <Route path="/todo" component={Todo} />
      <Redirect to="/todos" />
    </Switch>
  </main>;

export default AppMain;
