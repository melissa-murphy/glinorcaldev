// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Navbar, Nav } from "react-bootstrap"

import logo from "../images/gli-oblong-logo.png"

const Header = () => (
  <header className="shadow-lg">
    <Navbar fixed="top" bg="light" expand="lg" className="header-nav">
      <Navbar.Brand href="#home">
        <img
          src={logo}
          className="nav-logo img-fluid ml-lg-5"
          alt="GLI Norcal Landscape Construction logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto mr-lg-5">
          <Nav.Link className="active header-nav-link" href="/home">
            Home
          </Nav.Link>
          <Nav.Link className="header-nav-link" href="/portfolio">
            Portfolio
          </Nav.Link>
          <Nav.Link className="header-nav-link" href="/services">
            Services
          </Nav.Link>
          <Nav.Link className="header-nav-link" href="/about">
            About
          </Nav.Link>
          {/* <Nav.Link href="#link">News</Nav.Link> */}
          <Nav.Link className="header-nav-link" href="/contact">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
