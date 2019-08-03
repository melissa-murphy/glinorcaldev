import React from "react"
import { Container } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeCarousel from "../components/carousel/Home"

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <SEO title="Home" keywords={[`glinorcal`, `landscape`, `construction`]} />
    <Container className="text-center">
      <HomeCarousel />
    </Container>
  </Layout>
)

export default IndexPage
