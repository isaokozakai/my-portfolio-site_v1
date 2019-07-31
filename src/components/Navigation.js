import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  Container
} from 'reactstrap';

const Navigation = () => {
  return (
    <Navbar className="navbar" expand="sm">
      <Container  fluid>
        <NavbarBrand href="/">
          <h4 className="navbar-title">My Portfolio</h4>
        </NavbarBrand>
          <Nav className="ml-auto justify-content-end" navbar>
            <NavItem>
              <HashLink smooth to="#about"><div className="navbar-menu">About</div></HashLink>
            </NavItem>
            <NavItem>
              <HashLink smooth to="#projects"><div className="navbar-menu">Projects</div></HashLink>
            </NavItem>
            <NavItem>
              <HashLink smooth to="#contact"><div className="navbar-menu">Contact</div></HashLink>
            </NavItem>
          </Nav>
      </Container>
    </Navbar>
  )
}

export default Navigation;