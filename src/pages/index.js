import React, { Component } from "react"
import { Container } from "react-bootstrap"
import ImageGallery from "react-image-gallery"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "react-image-gallery/styles/css/image-gallery.css"
import image1 from "../images/glinorcal-stone-firepit.jpg"
import image2 from "../images/glinorcal-stone-path-masonry-glass-privacy-walls.jpg"
import image3 from "../images/glinorcal-stone-walls-patio-carpentry.jpg"

class IndexPage extends Component {
  render() {
    const images = [
      {
        original: image1,
        thumbnail: image1,
      },
      {
        original: image2,
        thumbnail: image2,
      },
      {
        original: image3,
        thumbnail: image3,
      },
    ]
    return (
      <Layout pageInfo={{ pageName: "index" }}>
        <SEO
          title="Home"
          keywords={[`glinorcal`, `landscape`, `construction`]}
        />
        <Container fluid className="text-center m-0 p-0">
          <ImageGallery showPlayButton={false} showFullscreenButton={false} items={images} />
        </Container>
      </Layout>
    )
  }
}

export default IndexPage
