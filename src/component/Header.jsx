import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
const Header = () => {
  return (
    <Navbar expand="lg" className="bg-secondary">
      <Container fluid>
        <Navbar.Brand href="#" style={{fontFamily:"inherit",color:"blue",fontWeight:"bold",fontSize:"25px"}}>Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end">
          <Nav
            className="my-4 my-lg-0"
            style={{ maxHeight: '350px',fontSize:"20px",fontFamily:"initial"}}
            navbarScroll
          >
            <Nav.Link href="#home" style={{marginLeft:"20px",color:"white"}}>Home</Nav.Link>
            <Nav.Link href="#features" style={{marginLeft:"20px",color:"white"}}>Features</Nav.Link>
            <Nav.Link href='#projects' style={{marginLeft:"20px",color:"white"}}>Projects</Nav.Link>
            <Nav.Link href='#resume' style={{marginLeft:"20px",color:"white"}}>Resume</Nav.Link>
            <Nav.Link href='#contact' style={{marginLeft:"20px",color:"white"}}>Contacts</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header


