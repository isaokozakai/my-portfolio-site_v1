import React from 'react'
import { Container, Row, Col } from 'reactstrap'

const Landing = () => (
  <Container>
    <Row>
      <Col className="landing-title display-2 font-weight-bold text-center">
        Isao Kozakai
          </Col>
    </Row>
    <Row>
      <Col className="display-4 font-weight-bold text-center mt-4">
        Web Developer
          </Col>
    </Row>
    <Row>
      <Col className="h1 text-center mt-3">
        Vancouver, BC
          </Col>
    </Row>
  </Container>
)

export default Landing;