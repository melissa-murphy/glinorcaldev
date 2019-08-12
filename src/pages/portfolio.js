import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col, Card } from "react-bootstrap"

import belMarinKeys from "../images/bel-marin-keys/bel-marin-1.jpg"
import belvedereFirePit from "../images/belvedere-firepit/belvedere-firepit-1.jpg"
import belvedereLagoon from "../images/belvedere-lagoon/belvedere-lagoon-1.jpg"
import piedmont from "../images/piedmont/piedmont-1.jpg"
import sanFrancisco from "../images/san-francisco/sf-1.jpg"
import sanRafael from "../images/san-rafael/san-rafael-1.jpg"

const Portfolio = () => (
  <Layout pageInfo={{ pageName: "portfolio" }}>
    <SEO title="Portfolio" />
    <Container style={{ marginTop: `7rem` }}>
      <Row className="mb-4">
        <Col xs={12} md={6} lg={4}>
          <Card
            style={{
              height: `40vh`,
              backgroundImage: `url(${belMarinKeys})`,
              backgroundSize: `cover`,
              backgroundPositionY: `bottom`,
              backgroundPositionX: `50%`,
            }}
          />
        </Col>
        <Col xs={12} md={6} lg={4}>
          {" "}
          <Card
            style={{
              height: `40vh`,
              backgroundImage: `url(${belvedereFirePit})`,
              backgroundSize: `cover`,
              backgroundPositionY: `center`,
              backgroundPositionX: `center`,
            }}
          />
        </Col>
        <Col xs={12} md={6} lg={4}>
          {" "}
          <Card
            style={{
              height: `40vh`,
              backgroundImage: `url(${belvedereLagoon})`,
              backgroundSize: `cover`,
              backgroundPositionY: `bottom`,
              backgroundPositionX: `50%`,
            }}
          />
        </Col>
      </Row>
      <Row>
        <Col xs={12} md={6} lg={4}>
          {" "}
          <Card
            style={{
              height: `40vh`,
              backgroundImage: `url(${piedmont})`,
              backgroundSize: `cover`,
              backgroundPositionY: `center`,
              backgroundPositionX: `center`,
            }}
          />
        </Col>
        <Col xs={12} md={6} lg={4}>
          {" "}
          <Card
            style={{
              height: `40vh`,
              backgroundImage: `url(${sanFrancisco})`,
              backgroundSize: `cover`,
              backgroundPositionY: `top`,
              backgroundSize: `cover`,
              backgroundPositionX: `center`,
            }}
          />
        </Col>
        <Col xs={12} md={6} lg={4}>
          {" "}
          <Card
            style={{
              height: `40vh`,
              backgroundImage: `url(${sanRafael})`,
              backgroundSize: `cover`,
              backgroundPositionY: `center`,
              backgroundPositionX: `center`,
            }}
          />
        </Col>
      </Row>
    </Container>
  </Layout>
)

export default Portfolio
