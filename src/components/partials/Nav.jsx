import React, { useState } from 'react';
import Media from 'react-media';
import classNames from 'classnames';
import HamburgerIcon from './HamburgerIcon';
import NavLink from './NavLink';

const Nav = () => {
  const navMenu = [
    { text: "ABOUT", url: "#about" },
    { text: "PROJECTS", url: "#projects" },
    { text: "CONTACT", url: "#contact" }
  ];

  const [isOpen, setIsOpen] = useState(false);

  const onScrollLink = (e) => {
    e.preventDefault();
    const targetElement = document.querySelector(e.target.hash);
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: "smooth"
    });
    setIsOpen(!isOpen);
  };

  const generateNavLinks = isSmall => {
    return navMenu.map(({ text, url }, index) => (
      <NavLink
        key={index} small={isSmall} text={text} url={url} handleClick={onScrollLink}
      />
    ));
  };

  return (
    <Media query={{ maxWidth: "767px" }}>
      {isSmall => (
        <>
          {isSmall ? (
            <>
              <HamburgerIcon isOpen={isOpen} handleBurgerClick={() => setIsOpen(!isOpen)} />
              <nav id="toggleMenu" className={classNames({ open: isOpen })} >
                {generateNavLinks(isSmall)}
              </nav>
            </>
          ) : (
              <nav id="menu">
                {generateNavLinks(isSmall)}
              </nav>
            )}
        </>
      )}
    </Media>
  );
};

export default Nav;
