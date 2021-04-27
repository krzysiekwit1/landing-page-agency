import React from "react"
import { Navbar, Nav } from "react-bootstrap"
const navBar = () => {
  return (
    <Navbar
      fixed="top"
      bg="transparent"
      expand="sm"
      className="navbar pt-0 pl-5"
    >
      <Navbar.Brand href="#home" style={{ color: "white", fontSize: "30px" }}>
        Logo
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home" style={{ color: "black" }}>
            Home
          </Nav.Link>
          <Nav.Link href="#link" style={{ color: "black" }}>
            Link
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default navBar
