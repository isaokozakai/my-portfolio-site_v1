import React, { useEffect } from 'react';

const Header = () => {
  useEffect(() => {
    window.onscroll = () => {
      const header = document.getElementById("header");
      if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        header.style.height = "10%";
      } else {
        header.style.height = "20%";
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
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;