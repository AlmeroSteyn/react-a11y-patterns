import React from 'react';
import PageFocusSection from './components/PageFocusSection';

const Contact = () =>
  <PageFocusSection
    docTitle="Idea11y demo | Contact"
    loadedMessage="Contact page loaded.">
    <h2>Contact information</h2>
    <ul>
      <li>
        Email: <a href="mailto:demo@todo.nl">demo@todo.nl</a>
      </li>
      <li>Phone: +31 6 00 00 00 01</li>
    </ul>
  </PageFocusSection>;

export default Contact;
