import React from 'react';

const Skill = ({ logoUrl, name }) => (
  <div className="col">
    <img src={logoUrl} />
    <p>{name}</p>
  </div>
)

export default Skill;