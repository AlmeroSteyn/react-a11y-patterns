import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Task from './Task';
import Tasks from './Tasks';
import Contact from './Contact';

const AppMain = () => (
  <main>
    <Switch>
      <Route path="/tasks" component={Tasks} />
      <Route path="/task" component={Task} />
      <Route path="/contact" component={Contact} />
      <Redirect to="/tasks" />
    </Switch>
  </main>
);

export default AppMain;
