import React from 'react';
import { Row, Col } from 'reactstrap';

const About = () => {
  return (
    <Row id="about" className="mt-5">
      <Col className="h2 mt-3" sm>About me</Col>
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