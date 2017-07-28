import React, { Component } from 'react';
import { LiveAnnouncer } from 'react-aria-live';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Todos from './Todos';
import Todo from './Todo';


class App extends Component {
  render() {
    return (
      <LiveAnnouncer>
        <Router>
        <div className="container">
          <div className="row">
            <header className="col-xs-12 page-header">
              <img
                alt="Acessibility meetup logo"
                className="App-logo"
                src={require('./idea11y.jpg')}
              />
              <h1>React a11y patterns</h1>
            </header>
          </div>
          <div className="row">
            <div className="col-xs-12 col-md-4 well">
              <aside>
                <ul className="nav nav-pills nav-stacked">
                  <li>
                    <Link to="/">Todos</Link>
                  </li>
                  <li>
                    <Link to="/todo">Add todo</Link>
                  </li>
                </ul>
              </aside>
            </div>
            <div className="col-xs-12 col-md-8">
              <main>
                  <Switch>
                    <Route path="/" exact component={Todos} />
                    <Route path="/todo" component={Todo} />
                  </Switch>
              </main>
            </div>
          </div>
        </div>
        </Router>
      </LiveAnnouncer>
    );
  }
}

export default App;
