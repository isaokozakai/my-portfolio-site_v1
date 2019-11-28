import React from 'react';

const Project = ({ imageSrc, imageAlt, children, technologies, websiteUrl, githubUrl }) => (
  <div className="col">
    <img src={imageSrc} alt={imageAlt} />
    <div className="description">
      {children}
      <ul>
        {technologies.map((technology, index) => (
          <li key={index}>{technology}</li>
        ))}
      </ul>
    </div>
    <div className="project-links">
      <a href={websiteUrl} rel="noopener noreferrer" target="_blank" className="website">Visit Website</a>
      <a href={githubUrl} rel="noopener noreferrer" target="_blank" className="github"><i className="fab fa-github fa-1x"></i>Source Code</a>
    </div>
  </div>
)

export default Project;