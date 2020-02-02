import React from "react";
import classNames from 'classnames';

const NavLink = ({ small, url, text, handleClick }) => {
  return (
    <a
      href={url}
      onClick={handleClick}
      className={classNames({ smallNavLink: small })}
    >
      {text}
    </a>
  );
}

export default NavLink;
