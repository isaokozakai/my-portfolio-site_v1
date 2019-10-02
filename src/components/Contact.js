import React from 'react';

const Contact = (props) => (
  <div id="contact" className="container">
    <h2 className="headline contact-title">
      Contact Me
      </h2>
    <div className="email contact-content">isaokozakai@gmail.com</div>
    <div className="contact-content">
      {/* LinkedIn */}
      <a href="https://www.linkedin.com/in/isao-kozakai-019536a2/" rel="noopener noreferrer" target="_blank">
        <i className="fab fa-linkedin fa-3x" aria-hidden="true" />
      </a>
      {/* GitHub */}
      <a href="https://github.com/isaokozakai" rel="noopener noreferrer" target="_blank">
        <i className="fab fa-github-square fa-3x" aria-hidden="true" />
      </a>
    </div>
  </div>
)

export default Contact;