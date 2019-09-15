import React from "react"

// import { Link } from "gatsby"
import { graphql, Link } from "gatsby"
// import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from "react-bootstrap"
import styled from "styled-components"

import belmarinkeys from "../images/portfolio-links/bel-marin-1.jpg"
import piedmont from "../images/portfolio-links/piedmont-1.jpg"
import belvederefire from "../images/portfolio-links/belvedere-firepit-1.jpg"
import sanrafael from "../images/portfolio-links/san-rafael-1.jpg"
import sanfrancisco from "../images/portfolio-links/sf-1.jpg"
import belvederelagoon from "../images/portfolio-links/belvedere-lagoon-1.jpg"

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
  margin-bottom: 1rem;
  box-shadow: 4px 5px 10px grey;
  height: 40vh;
  width: 100%;
  background-size: cover;
  background-position-y: ${props => props.yPosition};
  background-position-x: ${props => props.xPosition};
  background-image: url(${props => props.src});
  transition: all 1s ease;
  :hover {
    background: rgba(0, 0, 0, 0.6);
    transition: all 1s ease;
  }
`
const PortfolioLink = props => (
  <div>
    <ImgCard
      src={props.src}
      alt={props.alt}
      content={props.content}
      yPosition={props.yPosition}
      xPosition={props.xPosition}
    />
  </div>
)

const Portfolio = () => (
  <Layout pageInfo={{ pageName: "portfolio" }}>
    <SEO title="Portfolio" />
    <Container style={{ marginTop: `7rem`, marginBottom: `2rem` }}>
      <Row>
        <Col xs={12} md={6} lg={4}>
          <Link to="/belmarinkeys">
            <PortfolioLink
              src={belmarinkeys}
              alt="Bel Marin Keys"
              yPosition="bottom"
            />
          </Link>
        </Col>
        <Col xs={12} md={6} lg={4}>
          {" "}
          <Link to="/belvederefire">
            <PortfolioLink
              src={belvederefire}
              yPosition="center"
              xPosition="center"
              alt="Belvedere Island Fire Pit"
            />
          </Link>
        </Col>
        <Col xs={12} md={6} lg={4}>
          {" "}
          <Link to="/belvederelagoon">
            <PortfolioLink
              src={belvederelagoon}
              yPosition="center"
              xPosition="center"
              alt="Belvedere Island Lagoon"
            />
          </Link>
        </Col>
        <Col xs={12} md={6} lg={4}>
          {" "}
          <Link to="/piedmont">
            <PortfolioLink
              src={piedmont}
              yPosition="center"
              xPosition="center"
              alt="Grand Piedmont Estate"
            />
          </Link>
        </Col>
        <Col xs={12} md={6} lg={4}>
          {" "}
          <Link to="/sanfrancisco">
            <PortfolioLink
              src={sanfrancisco}
              yPosition="bottom"
              xPosition="center"
              alt="Petite San Francisco Back Yard"
            />
          </Link>
        </Col>
        <Col xs={12} md={6} lg={4}>
          {" "}
          <Link to="/sanrafael">
            <PortfolioLink
              src={sanrafael}
              yPosition="center"
              xPosition="center"
              alt="San Rafael Custom Stone"
            />
          </Link>
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default Portfolio
