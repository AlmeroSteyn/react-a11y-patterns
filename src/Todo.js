import React, { Component } from 'react';
import { LiveMessage } from 'react-aria-live';
import DocumentTitle from 'react-document-title';

class Todo extends Component {
  componentDidMount() {
    const { location } = this.props;
    if (location.state && location.state.setFocus) {
      this.section.focus();
    }
  }

  render() {
    return (
      <DocumentTitle title="Idea11y demo | Todo page">
        <div>
          <LiveMessage aria-live="polite" message="Todo page loaded." />
          <section ref={section => (this.section = section)} tabIndex="-1">
            <h2>Add new todo</h2>
            <form className="form-horizontal" noValidate="noValidate">
              <label htmlFor="desc">Description</label>
              <input id="desc" className="form-control" type="text" />
            </form>
          </section>
        </div>
      </DocumentTitle>
    );
  }
}

export default Todo;
