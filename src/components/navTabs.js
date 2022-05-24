import React from 'react';
import { Container } from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
// import Logo from '../assets/logo_transparent_background.png'



function NavTabs({ handlePageChange}) {
  return (
    <Navbar style={{background: '#6b9080'}}>
    <Container>
    <Navbar.Brand><img style={{width:180, heigth:80, marginLeft: -110}}/></Navbar.Brand>
    <Nav className="me-auto" style={{fontWeight: 'bold'}}>
      <Nav.Link onClick={() => handlePageChange('About')}>About</Nav.Link>
      <Nav.Link onClick={() => handlePageChange('Work')}>Work</Nav.Link>
      <Nav.Link onClick={() => handlePageChange('Contact')}>Contact</Nav.Link>
      <Nav.Link onClick={() => handlePageChange('Resume')}>Resume</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
  );
}

export default NavTabs;