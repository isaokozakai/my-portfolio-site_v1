import React from 'react';
import Project from './partials/Project';
import projectData from '../assets/projects.json';

const Projects = () => (
  <section id="projects" className="container">
    <h2 className="headline">PROJECTS</h2>
    <div className="grid-container">
      {
        projectData.map(({ imageSrc, imageAlt, technologies, websiteUrl, githubUrl, description }, index) => (
          <Project
            key={index}
            imageSrc={imageSrc}
            imageAlt={imageAlt}
            technologies={technologies}
            websiteUrl={websiteUrl}
            githubUrl={githubUrl}
          >
            <p>{description}</p>
          </Project>
        ))
      }
    </div>
  </section>
);

export default Projects;