import React from 'react';
import { Row, Col } from 'reactstrap';

const About = () => {
  return (
    <Row id="about">
      <Col className="h1 mt-3" sm>About me</Col>
      <Col sm>
        <table>
          <tbody>
            <tr>
              <th>HTML</th>
              <td>
                <div className="progress-track">
                  <div className="progress-fill" style={{width: '50%'}}>
                    <span>50%</span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th>CSS</th>
              <td>
                <div className="progress-track">
                  <div className="progress-fill" style={{width: '50%'}}>
                    <span>50%</span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th>JavaScript</th>
              <td>
                <div className="progress-track">
                  <div className="progress-fill" style={{width: '50%'}}>
                    <span>50%</span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th>React</th>
              <td>
                <div className="progress-track">
                  <div className="progress-fill" style={{width: '70%'}}>
                    <span>70%</span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th>Node.js</th>
              <td>
                <div className="progress-track">
                  <div className="progress-fill" style={{width: '70%'}}>
                    <span>70%</span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th>GraphQL</th>
              <td>
                <div className="progress-track">
                  <div className="progress-fill" style={{width: '60%'}}>
                    <span>60%</span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th>MongoDB</th>
              <td>
                <div className="progress-track">
                  <div className="progress-fill" style={{width: '70%'}}>
                    <span>70%</span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th>Java</th>
              <td>
                <div className="progress-track">
                  <div className="progress-fill" style={{width: '80%'}}>
                    <span>80%</span>
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <th>SQL</th>
              <td>
                <div className="progress-track">
                  <div className="progress-fill" style={{width: '70%'}}>
                    <span>70%</span>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </Col>
    </Row>
  );
};

export default About;