import PropTypes from "prop-types"
import React from "react"

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
  <Container
    style={{
      marginBottom: `4rem`,
    }}>
    <Row>
      <Col lg={6}>
        <p className="display-2 mb-2 pt-5 pb-2 text-dark">Hello!</p>
      </Col>
    </Row>
    <Row>
      <Col xs={6} md={3}>
        <h6 className="text-uppercase">Information</h6>
        <Nav defaultActiveKey="/home" className="flex-column">
          <Nav.Link href="/portfolio">Projects</Nav.Link>
          <Nav.Link href="/faqs">FAQs</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
      </Col>
      <Col xs={6} md={3}>
        <h6 className="text-uppercase">About</h6>
        <Nav defaultActiveKey="/home" className="flex-column">
          <Nav.Link href="/contact">Contact</Nav.Link>
          <Nav.Link href="/legal">Legal</Nav.Link>
          <Nav.Link href="/sitemap">Sitemap</Nav.Link>
        </Nav>
      </Col>
      <Col sm={12} md={3}>
        <h6 className="text-uppercase">Stay Posted</h6>
        <p id="subscribe" className="text-dark font-weight-light">
          Get insight on the landscape industry and helpful tips to get the most
          out of your construction project.
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
      <Col xs={12} lg={3} className="jobs-link">
        <h6 className="default-pointer text-uppercase">Career Opportunities</h6>

        <Nav>
          <Nav.Link className="text-dark" href="/careers">
            Browse the job openings.
          </Nav.Link>
        </Nav>

        <div
          className="social-buttons col-12 text-md-right
      text-right">
          <p className="text-uppercase pb-0 mb-0">follow gli norcal</p>
          <ul
            className="d-flex flex-row justify-content-end mt-0
          pt-0">
            <li className="px-0">
              <a rel="nofollow" href="https://instagram.com" title="Instagram">
                <img src="../images/icons/instagram.png" alt="Instagram" />{" "}
              </a>
              &nbsp;
            </li>
            <li className="px-0">
              <a rel="nofollow" href="https://linkedin.com" title="LinkedIn">
                <img src="images/icons/linkedin.png" alt="LinkedIn" />{" "}
              </a>
              &nbsp;
            </li>
            <li className="px-0">
              <a rel="nofollow" href="https://twitter.com" title="Twitter">
                <img src="images/icons/twitter.png" alt="Twitter" />
              </a>
            </li>
          </ul>
        </div>
      </Col>
    </Row>
  </Container>
)

FooterMain.propTypes = {
  siteTitle: PropTypes.string,
}

FooterMain.defaultProps = {
  siteTitle: ``,
}

export default FooterMain
