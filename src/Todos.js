import React from 'react';
import { LiveMessage } from 'react-aria-live';
import DocumentTitle from 'react-document-title';

const Todos = () =>
    <DocumentTitle title="Idea11y demo | Todos page">
        <div>
            <LiveMessage aria-live="polite" message="Todos page loaded." />
            <span>Todos</span>
        </div>
    </DocumentTitle>;

export default Todos;
