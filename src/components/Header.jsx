import React, { useState, useRef } from 'react';
import Logo from './Logo'

const Header = () => {
  const [headerClass, setHeaderClass] = useState("default");

  document.onscroll = () => {
    setHeaderClass(
      document.body.scrollTop > 100 || document.documentElement.scrollTop > 100 ?
        "scrolled" : "default");
  };

  const onScrollLink = (e) => {
    e.preventDefault();
    const targetElement = document.querySelector(e.target.hash);
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: "smooth"
    });
    toggle();
  };

  const nav = useRef();

  const toggle = () => {
    nav.classList.toggle("show");
  };

  return (
    <header id="header" className={headerClass}>
      <div className="container">
        <Logo />
        <div className="toggler" onClick={toggle}>
          <i className="fas fa-bars fa-2x"></i>
        </div>
        <nav id="nav" ref={nav}>
          <ul>
            <li><a href="#about" onClick={onScrollLink}>ABOUT</a></li>
            <li><a href="#projects" onClick={onScrollLink}>PROJECTS</a></li>
            <li><a href="#contact" onClick={onScrollLink}>CONTACT</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;