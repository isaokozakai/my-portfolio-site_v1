import React from 'react';

const About = () => {
  return (
    <section id="about" className="container">
      <h2 className="headline">ABOUT</h2>
      <div className="row">
        <div className="col">
          <div>
            My name is Isao Kozakai.<br />
            I'm a full-stack web developer with 5 years of professional experience, based in Vancouver<br />
            I'm interested in coding with React and Node.js.<br />
          </div>
        </div>
        <div className="col">
          <h3>Skills</h3>
          <ul>
            <li>JavaScript</li>
            <li>React/Redux</li>
            <li>Node.js/Express</li>
            <li>MongoDB</li>
            <li>GraphQL</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>jQuery</li>
            <li>Java</li>
            <li>SQL (Oracle Database, MySQL)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;