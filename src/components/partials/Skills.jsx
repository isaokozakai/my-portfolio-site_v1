import React from 'react';
import skillData from '../../assets/skills.json';

const Skills = ({ category }) => {
  let title;
  let skills;
  switch (category) {
    case "frontEnd":
      title = "Front-End";
      skills = skillData.frontEnd;
      break;
    case "backEnd":
      title = "Back-End";
      skills = skillData.backEnd;
      break;
    case "other":
      title = "Other";
      skills = skillData.other;
      break;
  }

  return (
    <div className="skills-category">
      <h4>{title}</h4>
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