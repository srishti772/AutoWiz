import React from 'react'
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import { PersonCircle } from 'react-bootstrap-icons';
import LogIn from '../LogIn/Login';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import SignUp from '../SignUp/SignUp';
import './Home.css'

import NavDropdown from 'react-bootstrap/NavDropdown';
function Navigation() {
  const [show, setShow] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    console.log('inside handleshow');
    setShow(true)
  } ;

  const handleCloseLogin = () => setShowLogin(false);
  const handleShowLogin = () => setShowLogin(true);


  return (
    <div>
    

    <Navbar bg="transparent" data-bs-theme="light" collapseOnSelect expand="lg">
      <Container>
        <Navbar.Brand href="/">AutoWiz</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/search">Catalogue</Nav.Link>
            <NavDropdown title={<PersonCircle/>} id="collapsible-nav-dropdown" >
              <NavDropdown.Item href="/profile">Account</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Wishlist
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">My Bookings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link  onClick={handleShowLogin}>Login</Nav.Link>
            <Nav.Link onClick={handleShow} eventKey={2} >
              Sign Up
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
     

    <Modal show={showLogin} onHide={handleCloseLogin}>
            <Modal.Header closeButton>
              <Modal.Title>Log In</Modal.Title>
            </Modal.Header>
            <LogIn />
          </Modal>


          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Sign up!</Modal.Title>
            </Modal.Header>
            <SignUp />
          </Modal>


    </div>
  )
}

export default Navigation