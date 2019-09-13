import React from "react"
import { Container } from "react-bootstrap"
import ImageGallery from "react-image-gallery"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "react-image-gallery/styles/css/image-gallery.css"
import image1 from "../images/glinorcal-stone-firepit.jpg"
import image2 from "../images/glinorcal-stone-path-masonry-glass-privacy-walls.jpg"
import image3 from "../images/glinorcal-stone-walls-patio-carpentry.jpg"

const SanRafael = () => {
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
    <Layout pageInfo={{ pageName: "Bel Marin Keys" }}>
      <SEO title="Home" keywords={[`glinorcal`, `landscape`, `construction`]} />
      <Container fluid className="carousel-wrapper mx-0 px-0">
        <ImageGallery
          showPlayButton={false}
          showFullscreenButton={false}
          items={images}
        />
      </Container>
    </Layout>
  )
}

export default SanRafael
