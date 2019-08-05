// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Navbar, Nav } from "react-bootstrap"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rgba(255,255,255,0.6)`,
      position: `fixed`,
      zIndex: `999`,
      width: `100%`,
      height: `4rem`
    }}>
    <Navbar bg="transparent" expand="lg">
      <Navbar.Brand href="#home">{siteTitle}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Portfolio</Nav.Link>
          <Nav.Link href="#link">Services</Nav.Link>
          <Nav.Link href="#link">About</Nav.Link>
          {/* <Nav.Link href="#link">News</Nav.Link> */}
          <Nav.Link href="#link">Contact</Nav.Link>
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
