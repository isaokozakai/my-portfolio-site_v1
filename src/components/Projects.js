import React from 'react';
import Project from './Project';

const Projects = () => (
  <section id="projects" className="container">
    <h2 className="headline">PROJECTS</h2>
    <div className="grid-container">
      <Project
        imageSrc="images/sharedlist.png"
        imageAlt="sharedlist"
        technologies={[
          "React", "Redux", "HTML", "CSS", "Bootstrap", "Node.js", "Express", "MongoDB"
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
    </div>
  </section>
)

export default Projects;