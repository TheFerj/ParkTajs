import React, { useState, useEffect } from "react";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import { FaHome, FaUser, FaCog, FaEnvelope,FaParking } from "react-icons/fa";
import './Navbar.css';
function NavBar() {
  const [isWideScreen, setIsWideScreen] = useState(window.innerWidth > 768);

  useEffect(() => {
    function handleResize() {
      setIsWideScreen(window.innerWidth > 768);
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const iconStyle = { color: "blue" };

  if (isWideScreen) {
    return (
      <Navbar className="Navbar" bg="aqua" expand="lg">
        <h1>ParkTa</h1>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/Home">
              <FaHome className="mr-1" style={iconStyle} />
              Home
            </Nav.Link>
            <Nav.Link href="/Parking">
              <FaParking className="mr-1" style={iconStyle} />
              Parking
            </Nav.Link>
            <Nav.Link href="/About">
              <FaUser className="mr-1" style={iconStyle} />
              About
            </Nav.Link>
            <Nav.Link href="/Services">
              <FaCog className="mr-1" style={iconStyle} />
              Services
            </Nav.Link>
            <Nav.Link href="/Contact">
              <FaEnvelope className="mr-1" style={iconStyle} />
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  } else {
    return (
      <Navbar bg="aqua" expand="lg">
        <h1>ParkTa</h1>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="ml-auto">
            
              <NavDropdown.Item href="/Home">
                <FaHome className="mr-2" style={iconStyle} />
                Home
              </NavDropdown.Item>
              <NavDropdown.Item href="/Parking">
                <FaParking className="mr-2" style={iconStyle} />
                Parking
              </NavDropdown.Item>
              
              <NavDropdown.Item href="/About">
                <FaUser className="mr-2" style={iconStyle} />
                About
              </NavDropdown.Item>
              <NavDropdown.Item href="/Services">
                <FaCog className="mr-2" style={iconStyle} />
                Services
              </NavDropdown.Item>
              <NavDropdown.Item href="/Contact">
                <FaEnvelope className="mr-2" style={iconStyle} />
                Contact
              </NavDropdown.Item>
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
