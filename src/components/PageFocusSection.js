import React, { Component } from 'react';
import { LiveMessage } from 'react-aria-live';
import DocumentTitle from 'react-document-title';
import { withRouter } from 'react-router-dom';

class PageFocusSection extends Component {
  componentDidMount() {
    const { location } = this.props;
    if (location.state && location.state.setFocus) {
      this.header.focus();
    }
  }

  render() {
    const { docTitle, liveMessage, children, headingText } = this.props;
    return (
      <DocumentTitle title={docTitle}>
        <div>
          <LiveMessage aria-live="polite" message={liveMessage} />
          <section>
            <h2 tabIndex="-1" ref={header => (this.header = header)}>
              {headingText}
            </h2>
            {children}
          </section>
        </div>
      </DocumentTitle>
    );
  }
}

export default withRouter(PageFocusSection);
