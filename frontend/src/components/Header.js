import React from 'react'
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap'

import {LinkContainer} from "react-router-bootstrap"

function Header() {
  return (
    <header>
      <Navbar className='header-container' variant='dark' expand="lg" collapseOnSelect>
  <Container>
    <LinkContainer to="/">
    <Navbar.Brand >B Shop</Navbar.Brand>
    </LinkContainer>
   
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="mr-auto"
      
      >
         <LinkContainer to="/">
         <Nav.Link ><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
         </LinkContainer>

         <LinkContainer to="/">
        <Nav.Link ><i className='fas fa-user'></i>Login</Nav.Link>
        </LinkContainer>
      
      </Nav>
      
    </Navbar.Collapse>
  </Container>
</Navbar>
    </header>
  )
}

export default Header