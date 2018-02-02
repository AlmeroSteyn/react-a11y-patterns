import classNames from 'classnames';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import LabelledInput from './components/LabelledInput';
import PageFocusSection from './components/PageFocusSection';
import { addTask } from './data/tasks';

class Task extends Component {
  state = {
    taskName: '',
    taskDescription: '',
    showErrors: false,
    liveMessage: 'Add task page loaded.',
    isSaving: false,
  };

  onSubmitHandler = e => {
    const { taskName, taskDescription } = this.state;
    const canSubmit = !!taskName && !!taskDescription;

    e.preventDefault();
    this.setState({ showErrors: true });

    if (canSubmit) {
      this.setState(
        {
          isSaving: true,
          liveMessage: `Adding task ${taskName}. Once complete you will be redirected.`,
        },
        () => {
          addTask({ taskName, taskDescription }).then(() => {
            this.setState({
              isSaving: false,
            });
            this.props.history.replace({
              pathname: '/tasks',
              state: { setFocus: true },
            });
          });
        }
      );
    }
  };

  onChangeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    const {
      taskName,
      taskDescription,
      showErrors,
      liveMessage,
      isSaving,
    } = this.state;
    const btnClass = classNames('btn btn-primary', {
      loader: isSaving,
    });

    return (
      <PageFocusSection
        docTitle="React Amsterdam Demo Add Task Page"
        liveMessage={liveMessage}
        headingText="Add new task">
        <form
          className="form-horizontal"
          noValidate="noValidate"
          onSubmit={this.onSubmitHandler}>
          <LabelledInput
            labelText="Name"
            name="taskName"
            value={taskName}
            errorText="Please provide a task name."
            showErrors={showErrors}
            onChange={this.onChangeHandler}
          />
          <LabelledInput
            labelText="Description"
            name="taskDescription"
            value={taskDescription}
            errorText="Please provide a task description."
            showErrors={showErrors}
            onChange={this.onChangeHandler}
          />
          <div className="pull-right">
            <Link to={{ pathname: '/tasks', state: { setFocus: true } }}>
              Cancel and go back
            </Link>
            <button className={btnClass} type="submit" aria-busy={isSaving}>
              Add task
              <div className="spinner" aria-hidden="true" />
            </button>
          </div>
        </form>
      </PageFocusSection>
    );
  }
}

export default Task;
