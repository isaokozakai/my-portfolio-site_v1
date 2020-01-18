import React from 'react';
import Project from './partials/Project';

const Projects = () => (
  <section id="projects" className="container">
    <h2 className="headline">PROJECTS</h2>
    <div className="grid-container">
      <Project
        imageSrc="images/sharedlist.png"
        imageAlt="sharedlist"
        technologies={[
          "React", "Redux", "HTML", "CSS", "Bootstrap", "Node.js", "Express", "MongoDB", "JWT"
        ]}
        websiteUrl="https://isao-sharedlist.herokuapp.com/"
        githubUrl="https://github.com/isaokozakai/mern-bbs"
      >
        <p>
          This is a mockup bulletin board application,
          which you can register an account, login/logout,
          and read/create/edit/delete articles.
        </p>
      </Project>
      <Project
        imageSrc="images/tri-tech-co.png"
        imageAlt="tri-tech-co"
        technologies={[
          "React", "HTML", "CSS", "Sass"
        ]}
        websiteUrl="https://lucid-benz-f12be9.netlify.com/"
        githubUrl="https://github.com/Vlad-Vekslyer/tri-tech"
      >
        <p>
          This is a mockup company website using React
        </p>
      </Project>
      <Project
        imageSrc="images/flight-search.png"
        imageAlt="flight-search"
        technologies={[
          "jQuery", "Ajax", "Web API", "HTML", "CSS"
        ]}
        websiteUrl="https://isaokozakai.github.io/flight-search/"
        githubUrl="https://github.com/isaokozakai/flight-search"
      >
        <p>
          This is a mockup flight tickets search application,
          which uses the Skyscanner API.
        </p>
      </Project>
    </div>
  </section>
)

export default Projects;