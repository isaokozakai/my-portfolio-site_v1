import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <a href="/">
          <h1 className="logo" alt="Isao">
            <i className="fas fa-seedling fa-1x" aria-hidden="true"></i>
          </h1>
        </a>
        <nav className="nav-menu">
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