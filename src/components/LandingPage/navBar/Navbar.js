import React, { useEffect, useState } from "react"
import { Navbar, Nav } from "react-bootstrap"
import "./navBar.scss"

const NavBar = () => {
  const [navbarLight, setNavbarLight] = useState(false)
  useEffect(() => {
    window.addEventListener("scroll", event => {
      const scrollHeight = window.scrollY
      const windowHeight = window.innerHeight
      const firstSectionHeight = document.getElementById("firstSection")
        .offsetTop
      const secondSectionHeight = document.getElementById("secondSection")
        .offsetTop
      const thirdSectionHeight = document.getElementById("thirdSection")
        .offsetTop

      switch (true) {
        case scrollHeight > firstSectionHeight &&
          scrollHeight < secondSectionHeight - windowHeight * 0.1:
          setNavbarLight(true)
          break
        case scrollHeight >= secondSectionHeight - windowHeight * 0.1 &&
          scrollHeight < secondSectionHeight:
          setNavbarLight(false)
          console.log("biala przerwa")
          break
        case scrollHeight >= secondSectionHeight &&
          scrollHeight < thirdSectionHeight:
          setNavbarLight(true)
          console.log("druga sekcja")
          break
        case scrollHeight > thirdSectionHeight:
          setNavbarLight(true)
          console.log("trzecia sekcja")
          break
        default:
          setNavbarLight(false)
          break
      }
    })
  }, [])

  return (
    <Navbar
      fixed="top"
      bg="transparent"
      expand="sm"
      className="navbar pt-0 pl-5"
    >
      <Navbar.Brand href="#home" id="logo">
        Logo
      </Navbar.Brand>
      <Navbar.Toggle
        aria-controls="basic-navbar-nav"
        className={navbarLight && "navbar-toggle-light"}
      />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home" className={navbarLight && "nav-link-dark"}>
            Contact
          </Nav.Link>
          <Nav.Link href="#link" className={navbarLight && "nav-link-dark"}>
            Our Team
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar
