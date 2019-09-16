// import PropTypes from "prop-types"
import React from "react"
import instagramIcon from "../images/icons/instagram.png"
import linkedInIcon from "../images/icons/linkedin.png"
import twitterIcon from "../images/icons/twitter.png"
import phone from "../images/icons/phone.png"
import message from "../images/icons/message.png"
import map from "../images/icons/map.png"
import checkicon from "../images/icons/checkmark.png"

import {
  Container,
  Row,
  Col,
  Nav,
  Form,
  FormGroup,
  Button,
  Image,
} from "react-bootstrap"

const FooterMain = ({ siteTitle, tagline }) => (
  <div>
    <Container>
      <Row>
        <Col lg={6}>
          <p className="h1 mb-2 pt-5 pb-2 text-light">{siteTitle}</p>
          <p className="">{tagline}</p>
        </Col>
      </Row>
      <Row>
        <Col xs={6} md={3}>
          <Nav defaultActiveKey="/home" className="flex-column">
            <h6 className="text-uppercase border-bottom border-dark">
              Information
            </h6>
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
            <h6 className="text-uppercase border-bottom border-dark">About</h6>
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
          <h6 className="text-uppercase border-bottom border-dark">
            Stay Posted
          </h6>
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
        <Col xs={12} md={3}>
          <h6 className="default-pointer text-uppercase border-bottom border-dark text-right">
            Careers at GLI
          </h6>
          <a
            className="text-light"
            href="https://www.indeed.com/cmp/Gli-Norcal-Landscape-Construction/jobs"
            target="_blank"
            rel="noreferrer noopener">
            <p className="text-right ">Browse the job openings.</p>
          </a>

          <Col className="pt-5 pt-md-2 social-buttons text-right  ">
            <p className="text-uppercase border-bottom border-dark pb-0 mb-0">
              follow gli norcal
            </p>
            <Row>
              <Col xs={{ span: 1, offset: 6 }}>
                <a
                  className="link-no-style"
                  rel="nofollow"
                  href="https://instagram.com"
                  title="Instagram">
                  <Image className="icon" src={instagramIcon} alt="Instagram" />{" "}
                </a>
                &nbsp;
              </Col>
              <Col xs={{ span: 1 }}>
                <a
                  className="link-no-style"
                  rel="nofollow"
                  href="https://linkedin.com"
                  title="LinkedIn">
                  <Image className="icon" src={linkedInIcon} alt="LinkedIn" />{" "}
                </a>
                &nbsp;
              </Col>
              <Col xs={{ span: 1 }}>
                <a
                  className="link-no-style"
                  rel="nofollow"
                  href="https://twitter.com"
                  title="Twitter">
                  <Image className="icon" src={twitterIcon} alt="Twitter" />
                </a>
              </Col>
            </Row>
          </Col>
        </Col>
      </Row>
      <Container className="footer-info-links">
        <Row>
          <Col md={{ span: 4, offset: 2 }}>
            <div>
              <Image src={message} alt="message" className="icon" />
              <Col>
                <Nav.Link
                  className="btn-link pt-0 link-no-style"
                  href="/contact">
                  hello@glinorcal.com
                </Nav.Link>
              </Col>
            </div>
          </Col>
          <Col xs={12} md={4}>
            <Image src={phone} alt="call" className="icon" />
            <Col>
              <p className="link-no-style">415.331.1709</p>
            </Col>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={{ span: 4 }}>
            <Image src={map} alt="address" className="icon" />
            <Col>
              <a
                className="link-no-style"
                href="https://www.google.com/maps/place/GLI+Norcal+Landscape+Construction/@37.939707,-122.514235,15z/data=!4m5!3m4!1s0x0:0x8c67891c5a08c38c!8m2!3d37.939707!4d-122.514235"
                target="_blank">
                125 Rich Street <br />
                Greenbrae, CA 94904
              </a>
            </Col>
          </Col>
          <Col xs={12} md={{ span: 4, offset: 4 }}>
            <Image src={checkicon} alt="checkmark" className="icon" />
            <Col>
              <a
                className="link-no-style"
                href="https://www2.cslb.ca.gov/OnlineServices/CheckLicenseII/LicenseDetail.aspx?LicNum=668200"
                target="_blank">
                CSLB Licensed Landscape <br />
                Contractor #668200
              </a>
            </Col>
          </Col>
        </Row>
      </Container>
    </Container>
  </div>
)

// FooterMain.propTypes = {
//   siteTitle: PropTypes.string,
// }

// FooterMain.defaultProps = {
//   siteTitle: ``,
// }

export default FooterMain
