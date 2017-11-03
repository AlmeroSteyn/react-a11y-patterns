import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PageFocusSection from './components/PageFocusSection';
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
      <PageFocusSection
        docTitle="#ID24 demo | Todos"
        liveMessage="Todos page loaded."
        headingText="Todos">
        <div className="row">
          <div className="col-xs-12">
            <ul>
              {todos.map(todo => (
                <li key={todo.id}>{`${todo.name} - ${todo.description}`}</li>
              ))}
            </ul>
          </div>
          <div className="col-xs-12">
            <Link
              className="pull-right"
              to={{ pathname: '/todo', state: { setFocus: true } }}>
              Add new todo
            </Link>
          </div>
        </div>
      </PageFocusSection>
    );
  }
}

export default Todos;
