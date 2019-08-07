import React from 'react';
import { Row, Col } from 'reactstrap';

const About = () => {
  return (
    <Row id="about" className="mt-5 mb-5">
      <Col sm>
        <h2>About me</h2>
        <div>
          My name is Isao Kozakai.<br/>
          I had been working as a web developer for 5 years.<br/>
          I like coding with React or Node.js.<br/>
        </div>
      </Col>
      <Col sm>
        <h2>Skills</h2>
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