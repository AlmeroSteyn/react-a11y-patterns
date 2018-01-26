import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PageFocusSection from './components/PageFocusSection';
import { getTasks } from './data/tasks';

class Tasks extends Component {
  state = {
    tasks: [],
    isLoading: true,
  };

  componentDidMount() {
    getTasks().then(tasks => {
      this.setState({ tasks, isLoading: false });
    });
  }

  render() {
    const { tasks, isLoading } = this.state;
    return (
      <PageFocusSection
        docTitle="React Amsterdam Demo Tasks Page"
        liveMessage="Tasks page loaded."
        headingText="Tasks">
        {isLoading ? (
          <div className="row">
            <div className="col-xs-12">
              <div role="status">Tasks loading...</div>
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
