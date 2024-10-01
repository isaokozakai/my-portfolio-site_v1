import React from 'react';
import Skills from './partials/Skills';

const About = () => {
  return (
    <section id="about" className="container">
      <h2 className="headline">ABOUT</h2>
      <div className="row">
        <div className="intro">
          <h3>Who I am</h3>
          <p>
            My name is Isao Kozakai, and I'm a full-stack software developer based in Montreal, originally
            from Japan. With 7 years of experience in the industry, I’m passionate about crafting effective
            and efficient software solutions. Outside of work, I practice Jeet Kune Do, a martial art founded
            by Bruce Lee. His philosophy and life have been a great inspiration to me ever since I began my
            journey in martial arts.
          </p>
          <h3>How I work</h3>
          <p>
            I’m always eager to learn new technologies and confident in my ability to adapt quickly.
            <br />
            As a dedicated, detail-oriented team player, I thrive under pressure and consistently deliver
            high-quality work.
          </p>
        </div>
        <div className="skills">
          <h3>My Skills</h3>
          <Skills />
        </div>
      </div>
    </section>
  );
};

export default About;
