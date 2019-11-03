import React, { useEffect } from 'react';

const Header = () => {
  const headerHeight = "100";
  const shrunkenHeaderHeigt = "50";

  useEffect(() => {
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
  }, []);

  const onScrollLink = (e) => {
    e.preventDefault();
    const targetElement = document.querySelector(e.target.hash);
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: "smooth"
    });
  }

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