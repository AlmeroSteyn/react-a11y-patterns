import React from 'react';
import { LiveMessage } from 'react-aria-live';
import DocumentTitle from 'react-document-title';

const Todo = () =>
  <DocumentTitle title="Idea11y demo | Todo page">
    <div>
      <LiveMessage aria-live="polite" message="Todo page loaded." />
      <span>Todo</span>
    </div>
  </DocumentTitle>;

export default Todo;
