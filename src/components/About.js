import React from 'react';
import {
  Row,
  Col
} from 'reactstrap';

const About = () => {
  return (
    <Row>
      <Col className="h1 mt-3" sm>About me</Col>
      <Col sm>
        <table>
          <tbody>
            <tr className="skill-table-row">
              <th className="skill-table-header">HTML</th>
              <td className="skill-table-body">
                <div className="progress-track">
                  <div className="progress-fill">
                    <span>50%</span>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="skill-table-row">
              <th className="skill-table-header">CSS</th>
              <td className="skill-table-body">
                <div className="progress-track">
                  <div className="progress-fill">
                    <span>50%</span>
                  </div>
                </div>
              </td>
            </tr>
            <tr className="skill-table-row">
              <th className="skill-table-header">JavaScript</th>
              <td className="skill-table-body">
                <div className="progress-track">
                  <div className="progress-fill">
                    <span>50%</span>
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