import React, { useState } from 'react';
import Logo from './Logo';
import Nav from './partials/Nav';

const Header = () => {
  const [headerClass, setHeaderClass] = useState("default");

  document.onscroll = () => {
    setHeaderClass(
      document.body.scrollTop > 100 || document.documentElement.scrollTop > 100 ?
        "scrolled" : "default");
  };

  return (
    <header className={headerClass}>
      <div className="container">
        <Logo />
        <Nav />
      </div>
    </header>
  )
}

export default Header;