import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { LiveMessage } from 'react-aria-live';
import DocumentTitle from 'react-document-title';
import { getTodos } from './data/todo';

class Todos extends Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    const { location } = this.props;
    this.setState({ todos: getTodos() });
    if (location.state && location.state.setFocus) {
      this.section.focus();
    }
  }

  render() {
    const { todos } = this.state;
    return (
      <DocumentTitle title="Idea11y demo | Todos page">
        <section ref={section => (this.section = section)} tabIndex="-1">
          <h2>Todos</h2>
          <div className="row">
            <LiveMessage aria-live="polite" message="Todos page loaded." />
            <div className="col-xs-12">
              <ul>
                {todos.map(todo =>
                  <li key={todo.id}>
                    {todo.name}
                  </li>
                )}
              </ul>
            </div>
            <div className="col-xs-12">
              <Link className="pull-right" to="/todo">
                Add new todo
              </Link>
            </div>
          </div>
        </section>
      </DocumentTitle>
    );
  }
}

export default Todos;
