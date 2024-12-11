import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">React-Redux-Shopping-Project</Navbar.Brand>


        <Nav>
          <Nav.Link to="/product" as={Link} >Product</Nav.Link>
        </Nav>
        <Navbar.Toggle />
        <Navbar.Collapse className='justify-content-end m-2 p-2 '>
          <Navbar.Text>
            <Nav.Link to="/cart" as={Link}>My Bag 0</Nav.Link>
          </Navbar.Text>
        </Navbar.Collapse>

      </Container>
    </Navbar>
  )
}

export default Header
