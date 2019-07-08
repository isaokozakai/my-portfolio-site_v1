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
    <Navbar className="font-weight-bold bg-info" dark expand="sm">
      <Container fluid>
        <NavbarBrand className="justify-content-start" href="/">My Portfolio</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse className="justify-content-end" isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <HashLink className="text-white mr-4" to="/#about">About</HashLink>
            </NavItem>
            <NavItem>
              <HashLink className="text-white mr-4" to="/#projects">Projects</HashLink>
            </NavItem>
            <NavItem>
              <HashLink className="text-white mr-4" to="/#contact">Contact</HashLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation;