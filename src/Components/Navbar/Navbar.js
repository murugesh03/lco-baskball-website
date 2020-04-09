import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Logo from "../../assets/sports-logo-transparent.png";
const NavBar = () => {
  return (
    <Navbar className="py-1" variant="dark">
      <Navbar.Brand href="#home">
        <img src={Logo} className="w-100" alt="logo" />
      </Navbar.Brand>
      <Nav className="ml-auto">
        <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">About us</Nav.Link>
        <Nav.Link href="#pricing">Tournament</Nav.Link>
        <Nav.Link href="#features">Video</Nav.Link>
        <Nav.Link href="#features">Contact Us</Nav.Link>
        <Nav.Link href="#pricing">Login</Nav.Link>
        <Nav.Link href="#pricing">Signup</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
