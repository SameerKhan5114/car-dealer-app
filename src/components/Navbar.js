// src/components/Navbar.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import 'bootstrap-icons/font/bootstrap-icons.css';


const CustomNavbar = () => {
  return (
    <Navbar expand="lg" className="bg-white border-bottom shadow-sm px-3">
      <Container fluid>
       
        <i className="bi bi-list fs-3 me-3 d-lg-none"></i>

        <Navbar.Brand href="#" className="fw-bold">
          <span style={{ color: '#C97B54' }}>Dealers</span> Auto Center
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto me-auto">
            <Nav.Link href="#">Home</Nav.Link>
            <Nav.Link href="#">Inventory</Nav.Link>
            <Nav.Link href="#">Finance</Nav.Link>
            <Nav.Link href="#">About Us</Nav.Link>
            <Nav.Link href="#">Our Services</Nav.Link>
          </Nav>

          
<div className="d-flex align-items-center gap-4">
  <button className="btn btn-light p-2 rounded-circle">
    <i className="bi bi-bell-fill fs-5 text-dark"></i> 
  </button>
  <button className="btn btn-light p-2 rounded-circle">
    <i className="bi bi-box-arrow-right fs-5 text-dark"></i> 
  </button>
</div>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
