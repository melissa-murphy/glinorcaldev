// import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import instagramIcon from "../images/icons/instagram.png"
import linkedInIcon from "../images/icons/linkedin.png"
import twitterIcon from "../images/icons/twitter.png"
import phone from "../images/icons/phone.png"

import {
  Container,
  Row,
  Col,
  Nav,
  Form,
  FormGroup,
  Button,
  ButtonGroup,
  Image,
} from "react-bootstrap"

const FooterMain = ({ siteTitle, tagline }) => (
  <div>
    <Container>
      <Row>
        <Col lg={6} className="mb-4">
          <p className="h1 mb-1 pt-5 pb-2 text-light text-nowrap">
            {siteTitle}
          </p>
          <p className="tagline">{tagline}</p>
          <a
            className="footer-info-links license"
            href="https://www2.cslb.ca.gov/OnlineServices/CheckLicenseII/LicenseDetail.aspx?LicNum=668200"
            target="_blank"
            rel="noopener noreferrer">
            California Licensed Landscape Contractor #668200
          </a>{" "}
          <br />
          <Button variant="warning" className="mt-3" href="tel:415-331-1709">
            <Image src={phone} alt="call" className="icon" />
            Call Us (415) 331-1709
          </Button>
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={4}>
          <Nav defaultActiveKey="/home" className="flex-column">
            <h6 className="text-uppercase border-bottom border-dark">
              Information
            </h6>
            <Nav.Link className="footer-nav" href="/portfolio">
              Projects
            </Nav.Link>
            {/* <Nav.Link className="footer-nav" href="/faqs">
              FAQs
            </Nav.Link> */}
            <Nav.Link className="footer-nav" href="/about">
              About
            </Nav.Link>
            <Nav.Link className="footer-nav" href="/contact">
              Contact
            </Nav.Link>
          </Nav>
        </Col>

        <Col xs={12} md={{ span: 3, offset: 2 }}>
          <h6 className="default-pointer text-uppercase border-bottom border-dark">
            Careers at GLI
          </h6>
          <a
            className="text-light"
            href="https://www.indeed.com/cmp/Gli-Norcal-Landscape-Construction/jobs"
            target="_blank"
            rel="noreferrer noopener">
            <p className="pl-2">Browse the job openings.</p>
          </a>

          <Col className="pt-5 pt-md-2 social-buttons ">
            <p className="text-uppercase border-bottom border-dark pb-0 mb-0">
              follow gli norcal
            </p>
            <Row>
              <Col xs={{ span: 1 }}>
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
                className="small"
                data-toggle="modal"
                data-target="#alertModal"
                type="button">
                No spam, we promise!
              </Button>
            </FormGroup>
          </Form>
        </Col>
      </Row>
      <Row className="pt-5">
        <Col>
          <small className="text-nowrap footer-info-links">
            © {new Date().getFullYear()}, GLI Norcal Landscape Construction Inc
          </small>
        </Col>
        <Col xs={1}>
          <Link href="/sitemap.xml">
            <small className="footer-info-links">Sitemap</small>
          </Link>
        </Col>
        <Col xs={1}>
          <Link href="/legal">
            <small className="footer-info-links">Legal</small>
          </Link>
        </Col>
      </Row>
    </Container>
  </div>
)
export default FooterMain
