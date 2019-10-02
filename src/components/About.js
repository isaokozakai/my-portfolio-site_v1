import React from 'react';

const About = () => {
  return (
    <div id="about" className="container">
      <h2 className="headline">About Me</h2>
      <div className="row">
        <div className="col">
          <div>
            My name is Isao Kozakai.<br />
            I'm a full-stack web developer based in Vancouver<br />
            I like coding with React and Node.js.<br />
          </div>
        </div>
        <div className="col">
          <h3>Skills</h3>
          <ul>
            <li>JavaScript</li>
            <li>React/Redux</li>
            <li>Node.js/Express</li>
            <li>MongoDB</li>
            <li>GraphQL</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Java</li>
            <li>SQL</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;