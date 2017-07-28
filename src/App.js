import React, { Component } from 'react';
import { LiveAnnouncer } from 'react-aria-live';
import { BrowserRouter as Router } from 'react-router-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AppMain from './AppMain';
import AppNavigation from './AppNavigation';

class App extends Component {
  render() {
    return (
      <LiveAnnouncer>
        <Router>
          <div className="container">
            <a className="skip" href="#navigation">
              Skip to navigation
            </a>
            <a className="skip" href="#main">
              Skip to content
            </a>
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
              <div className="col-xs-12 col-md-4" id="navigation" tabIndex="-1">
                <AppNavigation />
              </div>
              <div
                className="col-xs-12 col-md-8 border-devide"
                id="main"
                tabIndex="-1">
                <AppMain />
              </div>
            </div>
          </div>
        </Router>
      </LiveAnnouncer>
    );
  }
}

export default App;
