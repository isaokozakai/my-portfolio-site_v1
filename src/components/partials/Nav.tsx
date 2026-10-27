import { useState, type MouseEvent } from 'react';
import HamburgerIcon from './HamburgerIcon';
import NavLink from './NavLink';

const navMenu = [
  { text: 'ABOUT', url: '#about' },
  { text: 'PROJECTS', url: '#projects' },
  { text: 'CONTACT', url: '#contact' },
];

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onScrollLink = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    const targetElement = document.querySelector(event.currentTarget.hash);
    if (!(targetElement instanceof HTMLElement)) {
      return;
    }

    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsOpen(false);
  };

  return (
    <>
      <HamburgerIcon isOpen={isOpen} handleBurgerClick={() => setIsOpen((open) => !open)} />
      <nav
        id="toggleMenu"
        className={`absolute inset-x-0 top-12.5 overflow-hidden bg-[#555] font-bold transition-[height] duration-300 md:static md:flex md:h-auto md:items-center md:overflow-visible md:bg-transparent ${
          isOpen ? 'h-35' : 'h-0'
        } md:h-auto`}
      >
        {navMenu.map(({ text, url }) => (
          <NavLink key={url} url={url} text={text} handleClick={onScrollLink} />
        ))}
      </nav>
    </>
  );
};

export default Nav;
