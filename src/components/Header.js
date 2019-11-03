import React, { useEffect } from 'react';

const Header = () => {
  useEffect(() => {
    const headerHeight = "100";
    const shrunkenHeaderHeigt = "50";
    document.onscroll = () => {
      const header = document.getElementById("header");
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        header.style.height = `${shrunkenHeaderHeigt}px`;
        header.style.backgroundColor = "#666";
      } else {
        header.style.height = `${headerHeight}px`;
        header.style.backgroundColor = "transparent";
      }
    };
    document.onclick = e => {
      const target = e.target;
      if (!target.classList.contains("scroll-link")) return;
      e.preventDefault();
      const targetId = target.hash;
      const targetElement = document.querySelector(targetId);
      window.scrollTo({
        top: targetElement.offsetTop - shrunkenHeaderHeigt,
        behavior: "smooth"
      });
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
            <li><a href="#about" className="scroll-link">ABOUT</a></li>
            <li><a href="#projects" className="scroll-link">PROJECTS</a></li>
            <li><a href="#contact" className="scroll-link">CONTACT</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;