import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Todo from './Todo';
import Todos from './Todos';
import Contact from './Contact';

const AppMain = () => (
  <main>
    <Switch>
      <Route path="/todos" component={Todos} />
      <Route path="/todo" component={Todo} />
      <Route path="/contact" component={Contact} />
      <Redirect to="/todos" />
    </Switch>
  </main>
);

export default AppMain;
