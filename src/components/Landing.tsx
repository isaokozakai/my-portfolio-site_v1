import { useEffect, useState } from 'react';

const backgroundImage = 'images/background.png';

const Landing = () => {
  const [loaded, setLoaded] = useState(false);
  const [animationClass, setAnimationClass] = useState('animate-rubber-band [animation-delay:500ms]');

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setLoaded(true);
    };
    img.src = backgroundImage;
  }, []);

  const handleClick = () => {
    setAnimationClass('');
    window.setTimeout(() => {
      setAnimationClass('animate-rubber-band');
    }, 0);
  };

  return (
    <section
      id="landing"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden px-7.5 py-7.5 text-center text-white md:px-22.5 md:py-10"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <img
        src={backgroundImage}
        alt=""
        className="pointer-events-none absolute inset-0 max-w-none object-cover"
        style={{ width: '100%', height: '95vh' }}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.3)' }}
        aria-hidden="true"
      />
      {loaded ? (
        <div
          className={`relative z-1 inline-block cursor-pointer rounded-[5px] px-2.5 text-center select-none ${animationClass}`}
          onClick={handleClick}
        >
          <h1 className="my-4 text-[3rem] font-black min-[577px]:text-[5rem]">Isao Kozakai</h1>
          <h2 className="my-4 text-[2rem] font-black min-[577px]:text-[3rem]">
            Full-Stack Software Developer
          </h2>
          <h2 className="my-4 text-[2rem] font-black min-[577px]:text-[3rem]">Montreal, QC</h2>
        </div>
      ) : null}
    </section>
  );
};

export default Landing;
