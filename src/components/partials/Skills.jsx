import React from 'react';
import skillData from '../../assets/skills.json';

const Skills = ({ category }) => {
  let title;
  let skills;
  switch (category) {
    case "frontend":
      title = "Frontend";
      skills = skillData.frontend;
      break;
    case "backend":
      title = "Backend";
      skills = skillData.backend;
      break;
    case "other":
      title = "Other";
      skills = skillData.other;
      break;
  }

  return (
    <div className="skills-category">
      <div className="skills-title">
        <h4>{title}</h4>
      </div>
      <div className="skills-body">
        {
          skills.map(({ logoUrl, name }) => (
            <div key={name} className="skill">
              <img src={logoUrl} />
              <p>{name}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
};

export default Skills;