import PropTypes from "prop-types"
import React from "react"

import { Container, Row, Col } from "react-bootstrap"

const FooterMain = ({ siteTitle }) => (
  <Container>
    <Row>
      <Col lg={6}>
        <h2>{siteTitle}</h2>
        <Nav defaultActiveKey="/home" className="flex-column">
          <Nav.Link href="/portfolio">Portfolio</Nav.Link>
        </Nav>
      </Col>
      <Col lg={6}></Col>
    </Row>
  </Container>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default FooterMain
