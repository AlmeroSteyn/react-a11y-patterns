import React, { Component } from 'react';
import { LiveMessage } from 'react-aria-live';
import DocumentTitle from 'react-document-title';
import { getTodos } from './data/todo';

class Todos extends Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    this.setState({ todos: getTodos() });
  }

  render() {
    const { todos } = this.state;
    return (
      <DocumentTitle title="Idea11y demo | Todos page">
        <div>
          <LiveMessage aria-live="polite" message="Todos page loaded." />
          <ul>
            {todos.map(todo =>
              <li key={todo.id}>
                {todo.name}
              </li>
            )}
          </ul>
        </div>
      </DocumentTitle>
    );
  }
}

export default Todos;
