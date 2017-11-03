import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LabelledInput from './components/LabelledInput';
import PageFocusSection from './components/PageFocusSection';
import { addTodo } from './data/todo';

class Todo extends Component {
  state = {
    todoName: '',
    todoDescription: '',
    showErrors: false,
    liveMessage: 'Add todo page loaded.',
  };

  onSubmitHandler = e => {
    const { todoName, todoDescription } = this.state;
    const canSubmit = !!todoName && !!todoDescription;

    e.preventDefault();
    this.setState({ showErrors: true });

    if (canSubmit) {
      addTodo({ todoName, todoDescription });
      this.setState(
        {
          liveMessage: `Todo ${todoName} successfully added.`,
        },
        () => {
          setTimeout(() => {
            this.props.history.replace({
              pathname: '/todos',
              state: { setFocus: true },
            });
          }, 50);
        }
      );
    }
  };

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const { todoName, todoDescription, showErrors, liveMessage } = this.state;
    const canSubmit = !!todoName && !!todoDescription;

    return (
      <PageFocusSection
        docTitle="#ID24 demo | Add todo"
        liveMessage={liveMessage}
        headingText="Add new todo">
        <form
          className="form-horizontal"
          noValidate="noValidate"
          onSubmit={this.onSubmitHandler}>
          <LabelledInput
            labelText="Name"
            name="todoName"
            value={todoName}
            errorText="Please provide a todo name."
            showErrors={showErrors}
            onChange={this.onChangeHandler}
          />
          <LabelledInput
            labelText="Description"
            name="todoDescription"
            value={todoDescription}
            errorText="Please provide a todo description."
            showErrors={showErrors}
            onChange={this.onChangeHandler}
          />
          <div className="pull-right">
            <Link to={{ pathname: '/todos', state: { setFocus: true } }}>
              Cancel and go back
            </Link>
            <button
              className="btn btn-primary"
              type="submit"
              aria-label={
                !canSubmit
                  ? 'Add todo. Unable to add as some fields are invalid.'
                  : null
              }>
              Add todo
            </button>
          </div>
        </form>
      </PageFocusSection>
    );
  }
}

export default Todo;
