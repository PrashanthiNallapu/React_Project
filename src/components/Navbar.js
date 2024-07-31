// import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import './Navbar.css';

function ProjectNavbar() {
 

  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="navbar">
      <Container>
        <Navbar.Brand as={NavLink} to="/">
          <img
            src="/images.png"  
            className="d-inline-block align-top logo"
            alt="Helping Hands Charity"
          />
        
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Item>
              <Nav.Link as={NavLink} to="/Home" className="nav-link" activeClassName="active">Home</Nav.Link>
            </Nav.Item>
            <Nav.Item>
            <Nav.Link as={NavLink} to="/About" className="nav-link" activeClassName="active">About us</Nav.Link>

            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/Donate" className="nav-link" activeClassName="active">Donate now</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/Actions" className="nav-link" activeClassName="active">Actions</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/Impact" className="nav-link" activeClassName="active">Impact</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={NavLink} to="/contact" className="nav-link" activeClassName="active">ContactUs</Nav.Link>
            </Nav.Item>
          </Nav>
          
        </Navbar.Collapse>
      </Container>
     
    </Navbar>
  );
}

export default ProjectNavbar;
