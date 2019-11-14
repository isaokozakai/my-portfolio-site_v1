import React from 'react';

const About = () => {
  return (
    <section id="about" className="container">
      <h2 className="headline">ABOUT</h2>
      <div className="row">
        <div className="col">
          <div className="intro">
            My name is Isao Kozakai.<br />
            I'm a full-stack web developer with 5 years of professional experience, based in Vancouver.<br />
            Always happy to learn new technologies and am confident in my ability to learn quickly.<br />
            Dedicated and detailed team player with responsibility.
          </div>
        </div>
        <div className="col">
          <h3>Skills</h3>
          <ul>
            <li>JavaScript</li>
            <ul>
              <li>React/Redux</li>
              <li>Node.js/Express</li>
              <li>jQuery</li>
            </ul>
            <li>MongoDB</li>
            <li>GraphQL</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Java</li>
            <li>SQL (Oracle Database, MySQL)</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;