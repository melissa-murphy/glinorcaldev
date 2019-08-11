import PropTypes from "prop-types"
import React from "react"
import instagramIcon from "../images/icons/instagram.png"
import linkedInIcon from "../images/icons/linkedin.png"
import twitterIcon from "../images/icons/twitter.png"

import {
  Container,
  Row,
  Col,
  Nav,
  Form,
  FormGroup,
  Button,
} from "react-bootstrap"

const FooterMain = ({ siteTitle }) => (
  <div>
    <Container
      style={{
        marginBottom: `4rem`,
      }}>
      <Row>
        <Col lg={6}>
          <p className="h1 mb-2 pt-5 pb-2 text-light">{siteTitle}</p>
        </Col>
      </Row>
      <Row>
        <Col xs={6} md={3}>
          <Nav defaultActiveKey="/home" className="flex-column">
            <h6 className="text-uppercase">Information</h6>
            <Nav.Link className="footer-nav" href="/portfolio">
              Projects
            </Nav.Link>
            <Nav.Link className="footer-nav" href="/faqs">
              FAQs
            </Nav.Link>
            <Nav.Link className="footer-nav" href="/about">
              About
            </Nav.Link>
          </Nav>
        </Col>
        <Col xs={6} md={3}>
          <Nav defaultActiveKey="/home" className="flex-column">
            <h6 className="text-uppercase">About</h6>
            <Nav.Link className="footer-nav" href="/contact">
              Contact
            </Nav.Link>
            <Nav.Link className="footer-nav" href="/legal">
              Legal
            </Nav.Link>
            <Nav.Link className="footer-nav" href="/sitemap">
              Sitemap
            </Nav.Link>
          </Nav>
        </Col>
        <Col sm={12} md={3}>
          <h6 className="text-uppercase">Stay Posted</h6>
          <p id="subscribe" className="text-light font-weight-light">
            Get insight on the landscape industry and helpful tips to get the
            most out of your construction project.
          </p>
          <Form>
            <FormGroup>
              <Form.Control
                type="text"
                className="form-control
                        text-dark"
                title="GLI norcal newsletter"
                placeholder="enter your email"
              />
            </FormGroup>
            <FormGroup>
              <Button
                variant="success"
                className="text-uppercase
                        small"
                data-toggle="modal"
                data-target="#alertModal"
                type="button">
                No spam, we promise!
              </Button>
            </FormGroup>
          </Form>
        </Col>
        <Col xs={12} lg={3} className="jobs-link text-right">
          <h6 className="default-pointer text-uppercase ">
            Career Opportunities
          </h6>

          <Nav pullRight>
            <Nav.Link className="text-light ml-auto pr-0" href="/careers">
              Browse the job openings.
            </Nav.Link>
          </Nav>
        </Col>
        <Col 
        lg={12} className="social-buttons text-right">
          <p className="text-uppercase pb-0 mb-0">follow gli norcal</p>
          <ul
            className="d-flex flex-row justify-content-end mt-0
          pt-0">
            <li className="px-0 icon">
              <a
                className="link-no-style"
                rel="nofollow"
                href="https://instagram.com"
                title="Instagram">
                <img src={instagramIcon} alt="Instagram" />{" "}
              </a>
              &nbsp;
            </li>
            <li className="px-0 icon">
              <a
                className="link-no-style"
                rel="nofollow"
                href="https://linkedin.com"
                title="LinkedIn">
                <img src={linkedInIcon} alt="LinkedIn" />{" "}
              </a>
              &nbsp;
            </li>
            <li className="px-0 icon">
              <a
                className="link-no-style"
                rel="nofollow"
                href="https://twitter.com"
                title="Twitter">
                <img src={twitterIcon} alt="Twitter" />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  </div>
)

FooterMain.propTypes = {
  siteTitle: PropTypes.string,
}

FooterMain.defaultProps = {
  siteTitle: ``,
}

export default FooterMain
