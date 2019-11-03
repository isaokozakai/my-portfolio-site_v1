import React, { useEffect } from 'react';

const Header = () => {
  useEffect(() => {
    window.onscroll = () => {
      const header = document.getElementById("header");
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        header.style.height = "10vh";
        header.style.backgroundColor = "#666";
      } else {
        header.style.height = "15vh";
        header.style.backgroundColor = "transparent";
      }
    };
  }, []);

  return (
    <header id="header">
      <div className="container">
        <a href="/">
          <h1 className="logo" alt="Isao">
            <i className="fas fa-seedling fa-1x" aria-hidden="true"></i>
          </h1>
        </a>
        <nav>
          <ul>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#projects">PROJECTS</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;