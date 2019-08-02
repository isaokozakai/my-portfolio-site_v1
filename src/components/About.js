import React from 'react';
import { Row, Col } from 'reactstrap';

const About = () => {
  return (
    <Row id="about" className="mt-5 mb-5">
      <Col className="mt-3" sm>
        <h2>About me</h2>
        <div>
          I had been working as a web developer in Japan.<br/>
          At the time, I was mainly using Java.<br/>
        </div>
      </Col>
      <Col sm>
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