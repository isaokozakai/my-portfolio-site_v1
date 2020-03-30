import React, { useState } from 'react';

const Landing = () => {
  const [landingTitle, setLandingTitle] = useState("landing-title rubberBand delay");
  const handleClick = () => {
    setLandingTitle("landing-title");
    setTimeout(() => {
      setLandingTitle("landing-title rubberBand");
    });
  };
  return (
    <section id="landing" className="container">
      <div className={landingTitle} onClick={handleClick}>
        <h1>Isao Kozakai</h1>
        <h2>Full-Stack Web Developer</h2>
        <h2>Vancouver, BC</h2>
      </div>
    </section>
  );
};

export default Landing;