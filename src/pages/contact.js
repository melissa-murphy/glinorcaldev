import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Contactform from "../components/form"

//icons
import phone from "../images/icons/phone.png"
import map from "../images/icons/map.png"

import { Container, Row, Col } from "react-bootstrap"

const Contact = () => {
  return (
    <Layout pageInfo={{ pageName: "contact" }}>
      <SEO title="Contact: GLI Norcal Landscape Construction" />
      <Container className="contact-bg">
        <div className="contact wrapper">
          <div className="container d-flex justify-content-around align-content-center 100-h">
            <div className="contact-info card card-body mx-1">
              <h1 className="card-title text-white">Hi there!</h1>
              <p className="card-text">
                We are happy to provide an estimate and answer any questions you
                may have about our services. Contact us today!
              </p>
              <Container className="pb-5">
                <Contactform />
              </Container>
              <Container>
                <Row>
                  <Col xs={12} lg={{ span: 3, offset: 3 }}>
                    <div className="d-flex flex-row flex-nowrap align-items-end text-white">
                      <img src={map} alt="map icon" />
                      <h2>Our Offices</h2>
                    </div>
                    <p className="text-justify">
                      125 Rich Street
                      <br />
                      Greenbrae, CA 94904
                    </p>
                  </Col>
                  <Col xs={12} lg={3}>
                    <div className="d-flex flex-row flex-nowrap align-items-end text-white">
                      <img src={phone} alt="map icon" />
                      <h2>Call Us</h2>
                    </div>
                    <p>(415) 331-1709</p>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </Container>
    </Layout>
  )
}

export default Contact
