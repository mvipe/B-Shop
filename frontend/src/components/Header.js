import React from 'react'
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap'

function Header() {
  return (
    <header>
      <Navbar bg="dark" variant='dark' expand="lg" collapseOnSelect>
  <Container>
    <Navbar.Brand href="#">B Shop</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="mr-auto"
      
      >
        <Nav.Link href="#action1"><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
        <Nav.Link href="#action2"><i className='fas fa-user'></i>Login</Nav.Link>
       
      
      </Nav>
      
    </Navbar.Collapse>
  </Container>
</Navbar>
    </header>
  )
}

export default Header