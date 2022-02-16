import React, { useState, useEffect } from 'react';

const Landing = () => {
  const [loaded, setLoaded] = useState(false);
  const [landingTitle, setLandingTitle] = useState('landing-title rubberBand delay');
  const backgroundImage = 'images/background.png';

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setLoaded(true);
    };
    img.src = backgroundImage;
  }, []);

  const handleClick = () => {
    setLandingTitle('landing-title');
    setTimeout(() => {
      setLandingTitle('landing-title rubberBand');
    });
  };

  return (
    <section
      id="landing"
      className="container"
      style={{ background: `url(${backgroundImage}) center`, backgroundSize: 'cover' }}
    >
      {loaded ? (
        <div className={landingTitle} onClick={handleClick}>
          <h1>Isao Kozakai</h1>
          <h2>Full-Stack Web Developer</h2>
          <h2>Vancouver, BC</h2>
        </div>
      ) : null}
    </section>
  );
};

export default Landing;
