import React from 'react';
import skillData from '../../assets/skills.json';

const Skills = () => {
  return (
    ["Frontend", "Backend", "Other"].map(category => (
      <div className="skill-category">
        <div className="skill-category-title">
          <h4>{category}</h4>
        </div>
        <div className="skill-category-body">
          {
            skillData[category.toLowerCase()].map(({ logoUrl, name }) => (
              <div key={name} className="skill">
                <img src={logoUrl} />
                <p>{name}</p>
              </div>
            ))
          }
        </div>
      </div>
    ))
  )
};

export default Skills;