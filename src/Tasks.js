import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PageFocusSection from './components/PageFocusSection';
import { getTasks } from './data/tasks';

class Tasks extends Component {
  state = {
    tasks: [],
    liveMessage: 'Tasks page loading.',
    isLoading: true,
  };

  componentDidMount() {
    getTasks().then(tasks => {
      this.setState({ tasks, isLoading: false, liveMessage: 'Tasks loaded.' });
    });
  }

  render() {
    const { tasks, isLoading, liveMessage } = this.state;
    return (
      <PageFocusSection
        docTitle="React Amsterdam Demo Tasks Page"
        liveMessage={liveMessage}
        headingText="Tasks">
        {isLoading ? (
          <div className="row">
            <div aria-hidden="true" className="col-xs-12 loading">
              <p>Tasks loading...</p>
              <div className="spinner" />
            </div>
          </div>
        ) : (
          <div className="row">
            <div className="col-xs-12">
              <ul>
                {tasks.map(task => (
                  <li key={task.id}>{`${task.name} - ${task.description}`}</li>
                ))}
              </ul>
            </div>
            <div className="col-xs-12">
              <Link
                className="pull-right"
                to={{ pathname: '/task', state: { setFocus: true } }}>
                Add new task
              </Link>
            </div>
          </div>
        )}
      </PageFocusSection>
    );
  }
}

export default Tasks;
