import React from 'react';
import Project from './Project';

const Projects = () => (
  <section id="projects" className="container">
    <h2 className="headline">PROJECTS</h2>
    <div className="grid-container">
      <Project
        imageSrc="images/sharedlist.png"
        technologies={[
          "React", "Redux", "Node.js", "Express", "MongoDB"
        ]}
      />
    </div>
  </section>
)

export default Projects;