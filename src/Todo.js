import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LabelledInput from './components/LabelledInput';
import PageFocusSection from './components/PageFocusSection';
import { addTodo } from './data/todo';

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoName: '',
      todoDescription: '',
      showErrors: false,
    };

    this.onSubmitHandler = this.onSubmitHandler.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
  }

  onSubmitHandler(e) {
    e.preventDefault();
    this.setState({ showErrors: true });
    const { todoName, todoDescription } = this.state;
    const canSubmit = !!todoName && !!todoDescription;
    if (canSubmit) {
      addTodo({ todoName, todoDescription });
      this.props.history.replace('/todos');
    }
  }

  onChangeHandler(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    const { todoName, todoDescription, showErrors } = this.state;
    return (
      <PageFocusSection
        docTitle="Idea11y demo | Add todo"
        loadedMessage="Add todo page loaded.">
        <h2>Add new todo</h2>
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
            <Link to="/todos">Cancel and go back</Link>
            <button className="btn btn-primary" type="submit">
              Add todo
            </button>
          </div>
        </form>
      </PageFocusSection>
    );
  }
}

export default Todo;
