import React, { useState } from 'react';
import { HashLink } from 'react-router-hash-link';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  Container
} from 'reactstrap';

const Navigation = () => {
  return (
    <Navbar className="navbar" expand="xs">
      <Container fluid>
        <NavbarBrand href="/">
          <h1 className="logo" alt="Isao"><i class="fas fa-seedling fa-1x" aria-hidden="true"></i></h1>
        </NavbarBrand>
        <Nav className="ml-auto justify-content-end" navbar>
          <NavItem>
            <HashLink className="navbar-menu" smooth to="#about">About</HashLink>
          </NavItem>
          <NavItem>
            <HashLink className="navbar-menu" smooth to="#projects">Projects</HashLink>
          </NavItem>
          <NavItem>
            <HashLink className="navbar-menu" smooth to="#contact">Contact</HashLink>
          </NavItem>
        </Nav>
      </Container>
    </Navbar>
  )
}

export default Navigation;