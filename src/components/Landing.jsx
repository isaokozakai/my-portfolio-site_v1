import React, { useRef } from 'react';

const Landing = () => {
  const landingTitle = useRef();
  const handleClick = () => {
    landingTitle.current.classList.remove("rubberBand");
    landingTitle.current.classList.remove("delay");
    setTimeout(() => {
      landingTitle.current.classList.add("rubberBand");
    }, 1);
  };
  return (
    <section id="landing" className="container">
      <div className="landing-title rubberBand delay" onClick={handleClick} ref={landingTitle}>
        <h1>Isao Kozakai</h1>
        <h2>Full-Stack Web Developer</h2>
        <h2>Vancouver, BC</h2>
      </div>
    </section>
  );
};

export default Landing;