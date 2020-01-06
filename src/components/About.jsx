import React from 'react';
import Skills from './partials/Skills';

const About = () => {

  return (
    <section id="about" className="container">
      <h2 className="headline">ABOUT</h2>
      <div className="row">
        <div className="col">
          <div className="intro">
            My name is Isao Kozakai.<br />
            I'm a full-stack web developer with 5 years of professional experience, based in Vancouver.<br />
            I'm always happy to and willing to learn new technologies, and am confident in my ability to learn quickly. I'm a dedicated and detail-oriented team player with responsibility who can work well under pressure.
          </div>
        </div>
        <div className="col">
          <h3>Skills</h3>
          <Skills category="frontEnd" />
          <Skills category="backEnd" />
          <Skills category="other" />
        </div>
      </div>
    </section>
  );
};

export default About;