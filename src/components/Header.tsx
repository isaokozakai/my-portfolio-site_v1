import { useEffect, useState } from 'react';
import Logo from './Logo';
import Nav from './partials/Nav';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Ranges stay exclusive so a later Tailwind breakpoint cannot override a wider one.
  const logoClass = scrolled
    ? 'w-[26%] md:h-auto md:max-lg:w-[14%] md:transition-all md:duration-500 lg:max-[1199px]:w-[11%] min-[1200px]:w-[8%]'
    : 'w-[26%] md:h-auto md:max-[1199px]:w-[14%] md:transition-all md:duration-500 min-[1200px]:w-[10%]';

  return (
    <header
      className={`fixed top-0 z-10 w-full text-white transition-all duration-500 ${
        scrolled
          ? 'h-auto min-h-12.5 bg-[#555] md:h-12.5 md:min-h-12.5'
          : 'h-auto min-h-12.5 bg-[#555] md:h-25 md:min-h-25 md:bg-transparent'
      }`}
    >
      <div className="relative flex h-full flex-wrap items-center justify-between px-7.5 py-2.5 md:px-22.5 md:py-0">
        <Logo className={logoClass} />
        <Nav />
      </div>
    </header>
  );
};

export default Header;
