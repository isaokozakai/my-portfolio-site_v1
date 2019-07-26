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
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar className="navbar" expand="sm">
      <Container  fluid>
        <NavbarBrand href="/">
          <h4 className="navbar-title">My Portfolio</h4></NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse className="justify-content-end" isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
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
        </Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation;