import React from "react"
// import { Link } from "gatsby"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from "react-bootstrap"
import styled from "styled-components"

export const portfolioLinkImage = graphql`
  fragment portfolioLinkImage on File {
    childImageSharp {
      fluid(maxWidth: 600, maxHeight: 600) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`

const ImgCard = styled.div`
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
            src={"../images/portfolio-links/bel-marin-1.jpg"}
            alt="Bel Marin Keys"
            yPosition="70%"
          />
        </Col>
        <Col xs={12} md={6} lg={4}>
          {" "}
          <PortfolioLink
            src={"../images/portfolio-links/belvedere-firepit-1.jpg"}
            yPosition="center"
            xPosition="center"
            alt="Belvedere Island Fire Pit"
          />
        </Col>
        <Col xs={12} md={6} lg={4}>
          {" "}
          <PortfolioLink
            src={"../images/portfolio-links/belvedere-lagoon-1.jpg"}
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
            src={"../images/portfolio-links/piedmont-1.jpg"}
            yPosition="center"
            xPosition="center"
            alt="Grand Piedmont Estate"
          />
        </Col>
        <Col xs={12} md={6} lg={4}>
          {" "}
          <PortfolioLink
            src={"../images/portfolio-links/sf-1.jpg"}
            yPosition="bottom"
            xPosition="center"
            alt="Petite San Francisco Back Yard"
          />
        </Col>
        <Col xs={12} md={6} lg={4}>
          {" "}
          <PortfolioLink
            src={"../images/portfolio-links/san-rafael-1.jpg"}
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
