import React from 'react';

const Project = (props) => (
  <div className="col">
    <div className="card">
      <img src={props.imageSrc} alt={props.imageAlt} />
      <div className="description">
        {props.children}
        <p className="technologies">Technologies</p>
        <ul>
          {props.technologies.map((technology, index) => (
            <li key={index}>{technology}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
)

export default Project;