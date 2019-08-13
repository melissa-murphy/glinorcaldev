import React from "react"
// import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from "react-bootstrap"
import styled from "styled-components"

// import belMarinKeys from "./bel-marin-keys/bel-marin-1.jpg"
// import belvedereFirePit from "./belvedere-firepit/belvedere-firepit-1.jpg"
// import belvedereLagoon from "./belvedere-lagoon/belvedere-lagoon-1.jpg"
// import piedmont from "./piedmont/piedmont-1.jpg"
// import sanFrancisco from "./san-francisco/sf-1.jpg"
// import sanRafael from "./san-rafael/san-rafael-1.jpg"

export const portfolioLinkImage = graphql`
  fragment portfolioLinkImage on File {
    childImageSharp {
      fluid(maxWidth: 600, maxHeight: 600) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
const ImgCard = styled(Img)`
  box-shadow: 4px 5px 10px grey;
  height: 40vh;
  width: 100%;
  background-size: cover;
  background-position-y: ${props => props.yPosition};
  background-position-x: ${props => props.xPosition};
  background-image: url(${props => props.src});
`
const PortfolioLink = props => (
  <div>
    <ImgCard
      src={props.src}
      alt={props.alt}
      yPosition={props.yPosition}
      xPosition={props.xPosition}
    />
  </div>
)

const Portfolio = () => (
  <Layout pageInfo={{ pageName: "portfolio" }}>
    <SEO title="Portfolio" />
    <Container style={{ marginTop: `7rem`, marginBottom: `2rem` }}>
      <Row className="mb-4">
        <Col xs={12} md={6} lg={4}>
          <PortfolioLink
            src={belMarinKeys}
            alt="Bel Marin Keys"
            yPosition="70%"
          />
        </Col>
        <Col xs={12} md={6} lg={4}>
          {" "}
          <PortfolioLink
            src={belvedereFirePit}
            yPosition="center"
            xPosition="center"
            alt="Belvedere Island Fire Pit"
          />
        </Col>
        <Col xs={12} md={6} lg={4}>
          {" "}
          <PortfolioLink
            src={belvedereLagoon}
            yPosition="center"
            xPosition="center"
            alt="Belvedere Island Lagoon"
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6} lg={4}>
          {" "}
          <PortfolioLink
            src={piedmont}
            yPosition="center"
            xPosition="center"
            alt="Grand Piedmont Estate"
          />
        </Col>
        <Col xs={12} md={6} lg={4}>
          {" "}
          <PortfolioLink
            src={sanFrancisco}
            yPosition="bottom"
            xPosition="center"
            alt="Petite San Francisco Back Yard"
          />
        </Col>
        <Col xs={12} md={6} lg={4}>
          {" "}
          <PortfolioLink
            src={sanRafael}
            yPosition="center"
            xPosition="center"
            alt="San Rafael Custom Stone"
          />
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default Portfolio
