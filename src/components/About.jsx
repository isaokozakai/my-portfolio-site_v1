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
            My name is Isao Kozakai. I'm a full-stack web developer based in Vancouver.
            I was born and raised in a middle-sized city in Japan called Niigata.
            I had been working as a software developer using mainly Java for 5 years.
            Besides programming, I like practicing martial arts.
            I have practiced a martial art called Jeet Kune Do for 5 years in Japan, which was founded by Bruce Lee.
            I have been inspired by his words and life since I got to know about him after I started practicing Jeet Kune Do.
          </p>
          <h3>How I work</h3>
          <p>
            I'm always happy to and willing to learn new technologies, and am confident in my ability to learn quickly.<br />
            I'm a dedicated and detail-oriented team player who can work well under pressure.
          </p>
        </div>
        <div className="skills">
          <h3>My Skills</h3>
          <Skills category="frontend" />
          <Skills category="backend" />
          <Skills category="other" />
        </div>
      </div>
    </section>
  );
};

export default About;