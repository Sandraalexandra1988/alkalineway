import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import {  FaUser } from "react-icons/fa";
import { LinkContainer } from 'react-router-bootstrap'
import logoMini from '../assets/images/logo-mini.webp'

const Header = () => {
  return (
    <header>
      <Navbar bg="primary" variant="dark" expand="md" collapseOnSelect>
        <Container>
            <LinkContainer to='/'>
            <Navbar.Brand >
            <img src={logoMini} alt='alkalineway' className="img-fluid " />
             AlkalineWay
            </Navbar.Brand>
            </LinkContainer>
         
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/reviews">
                <Nav.Link>Reviews</Nav.Link>
            </LinkContainer>
            
  
          
          
          </Nav>
        </Navbar.Collapse>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
                <LinkContainer to="/login">
                <Nav.Link>
                <FaUser /> Sign In
              </Nav.Link>
                </LinkContainer>
              
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </header>
  );
};

export default Header;
