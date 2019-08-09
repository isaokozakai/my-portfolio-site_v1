import React from 'react';
import { Row, Col } from 'reactstrap';

const About = () => {
  return (
    <Row id="about">
      <Col sm>
        <h1 className="headline">About Me</h1>
        <div>
          My name is Isao Kozakai.<br/>
          I'm a web developer who has experience coding with Java, JavaScript and HTML/CSS.<br/>
          I like coding with React and Node.js.<br/>
        </div>
      </Col>
      <Col sm>
        <h1 className="headline">Skills</h1>
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
      </Col>
    </Row>
  );
};

export default About;