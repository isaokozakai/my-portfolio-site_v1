import React, { useRef } from 'react';

const Landing = () => {
  const landingTitle = useRef();
  const handleClick = () => {
    landingTitle.current.classList.add("rubberBand");
  };
  const handleAnimationEnd = () => {
    landingTitle.current.classList.remove("rubberBand");
    landingTitle.current.classList.remove("delay");
  };
  return (
    <section id="landing" className="container">
      <div className="landing-title rubberBand delay" onClick={handleClick} onAnimationEnd={handleAnimationEnd} ref={landingTitle}>
        <h1>Isao Kozakai</h1>
        <h2>Full-Stack Web Developer</h2>
        <h2>Vancouver, BC</h2>
      </div>
    </section>
  );
};

export default Landing;