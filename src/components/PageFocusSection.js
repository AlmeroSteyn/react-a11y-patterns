import React, { Component } from 'react';
import { LiveMessage } from 'react-aria-live';
import DocumentTitle from 'react-document-title';
import { withRouter } from 'react-router-dom';

class PageFocusSection extends Component {
  componentDidMount() {
    const { location } = this.props;
    if (location.state && location.state.setFocus) {
      this.section.focus();
    }
  }

  render() {
    const { docTitle, loadedMessage, children } = this.props;
    return (
      <DocumentTitle title={docTitle}>
        <div>
          <LiveMessage aria-live="polite" message={loadedMessage} />
          <section ref={section => (this.section = section)} tabIndex="-1">
            {children}
          </section>
        </div>
      </DocumentTitle>
    );
  }
}

export default withRouter(PageFocusSection);
