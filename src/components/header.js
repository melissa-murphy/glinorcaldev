import React from "react"
import {Link} from "gatsby"
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
          <Nav.Item className="nav-link">
            <Link to="/" activeClassName="active" className="nav-link">Home</Link>
          </Nav.Item>
          <Nav.Item className="nav-link">
            <Link to="/portfolio" activeClassName="active" className="nav-link">Portfolio</Link>
          </Nav.Item>
          <Nav.Item className="nav-link">
            <Link to="/services" activeClassName="active" className="nav-link">Services</Link>
          </Nav.Item>
          <Nav.Item className="nav-link">
            <Link to="/about" activeClassName="active" className="nav-link">About</Link>
          </Nav.Item>
          {/* <Nav.Link href="#link">News</Nav.Link> */}
          <Nav.Item className="nav-link">
            <Link to="/contact" activeClassName="active" className="nav-link">Contact</Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </header>
)

export default Header
