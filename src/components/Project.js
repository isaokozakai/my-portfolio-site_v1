import React from 'react';

const Project = (props) => (
  <div className="col">
    <div className="card">
      <img src={props.imageSrc} />
      <p>Technologies</p>
      <ul>
        {props.technologies.map((technology, index) => (
          <li key={index}>{technology}</li>
        ))}
      </ul>
    </div>
  </div>
)

export default Project;