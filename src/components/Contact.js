import React from 'react';
import { Container, Row, Col } from 'reactstrap';

const Contact = (props) => (
  <Container id="contact">
    <Row>
      <Col className="contact-title h2 text-center" md={{ size: 6, offset: 3 }}>
        Contact Me
      </Col>
    </Row>
    <Row>
      <Col className="h3 text-center">feat130@hotmail.co.jp</Col>
    </Row>
    <Row className="text-center">
      <Col>
        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/isao-kozakai-019536a2/" rel="noopener noreferrer" target="_blank">
          <i className="fa fa-linkedin-square fa-4x" aria-hidden="true" />
        </a>
        {/* GitHub */}
        <a href="https://github.com/isaokozakai" rel="noopener noreferrer" target="_blank">
          <i className="fa fa-github-square fa-4x" aria-hidden="true" />
        </a>
      </Col>
    </Row>
  </Container>
)

export default Contact;