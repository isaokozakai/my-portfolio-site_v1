import React from 'react'
import { Container, Row, Col } from 'reactstrap'

const Landing = () => {
  return (
    <Container className="landing pt-4 pb-5" fluid>
      <Row>
        <Col>
          <div className="landing-title">
            <span>Isao Kozakai</span><br />
            Web developer<br />
            Vancouver, BC
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Landing;