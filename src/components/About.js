import React from 'react';
import {
  Row,
  Col,
  Progress,
  Table
} from 'reactstrap';

const About = () => {
  return (
    <Row>
      <Col className="h1 mt-3" sm>About me</Col>
      <Col className="mt-4" sm>
        <Table borderless>
          <tbody>
            <tr>
              <th className="skill-table-header">HTML</th>
              <td>
                <Progress value={50} color="success" style={{height: "20px"}}>50%</Progress>
              </td>
            </tr>
            <tr>
              <th className="skill-table-header">CSS</th>
              <td>
                <Progress value={50} color="success" style={{height: "20px"}}>50%</Progress>
              </td>
            </tr>
            <tr>
              <th className="skill-table-header">JavaScript</th>
              <td>
                <Progress value={50} color="success" style={{height: "20px"}}>50%</Progress>
              </td>
            </tr>
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};

export default About;