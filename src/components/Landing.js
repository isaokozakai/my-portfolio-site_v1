import React from 'react'
import { Container, Row, Col } from 'reactstrap'

const Landing = () => {
  return (
    <Container className="landing pt-4 pb-5" fluid>
      <Row>
        <Col>
          <h1 className="landing-title">
            Hello, I'm Isao Kozakai.<br/>
            I'm a full-stack web developer.
          </h1>
        </Col>
      </Row>
      <Row>
        <Col className="text-center mt-3">
          <h2 className="landing-title">Vancouver, BC</h2>
        </Col>
      </Row>
    </Container>
  );
};

export default Landing;