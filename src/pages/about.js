import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { useSiteMetadata } from "../hooks/use-site-metadata"
import { Container, Media, Row, Col, Card } from "react-bootstrap"

import aboutImage from "../images/stone-bg.jpg"


const About = () => {
  const { title } = useSiteMetadata()
  ;<Layout pageInfo={{ pageName: "about" }}>
    <SEO title="About Us: GLI Norcal Landscape Construction" />
    <Container>
      <Media className="about-image">
        <img className="img img-fluid rounded" src={aboutImage} alt={title} />
      </Media>
      <Row>
        <Col className="about-text py-3">
          <Card border="success">
            <Card.Body>
              <Card.Title>
                GLI NorCal has built outstanding landscapes across the Bay Area
                for more than 30 years...
              </Card.Title>
              <Card.Text>
                We specialize in residential and commercial landscape
                construction projects of all sizes. GLI NorCal’s experience and
                commitment to excellence is the foundation of our fine
                craftsmanship. With high-level attention to detail, we furnish
                landscapes of the highest quality. Our professional team is
                dedicated to understanding each client’s needs and provides
                exceptional service. GLI NorCal works independently, with the
                best architects, general contractors, and sub-contractors to
                transform your ideas into real outdoor living spaces.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  </Layout>
}

export default About
