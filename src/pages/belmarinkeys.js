import React from "react"
import Media from "react-responsive"
import { Container } from "react-bootstrap"
import ImageGallery from "react-image-gallery"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "react-image-gallery/styles/css/image-gallery.css"
import image1 from "../images/bel-marin-keys/bel-marin-1.jpg"
import image2 from "../images/bel-marin-keys/bel-marin-2.jpg"
import image3 from "../images/bel-marin-keys/bel-marin-3.jpg"
import image4 from "../images/bel-marin-keys/bel-marin-4.jpg"
import image5 from "../images/bel-marin-keys/bel-marin-5.jpg"
import image6 from "../images/bel-marin-keys/bel-marin-6.jpg"
import image7 from "../images/bel-marin-keys/bel-marin-7.jpg"
import image8 from "../images/bel-marin-keys/bel-marin-8.jpg"
import image9 from "../images/bel-marin-keys/bel-marin-9.jpg"

const BelMarinKeys = () => {
  const mobileimages = [
    {
      original: image1,
      thumbnail: image1,
    },
    {
      original: image3,
      thumbnail: image3,
    },
    {
      original: image5,
      thumbnail: image5,
    },
    {
      original: image8,
      thumbnail: image8,
    },
  ]
  const desktopimages = [
    {
      original: image2,
      thumbnail: image2,
    },

    {
      original: image4,
      thumbnail: image4,
    },

    {
      original: image6,
      thumbnail: image6,
    },
    {
      original: image7,
      thumbnail: image7,
    },

    {
      original: image9,
      thumbnail: image9,
    },
  ]

  return (
    <Layout pageInfo={{ pageName: "Bel Marin Keys" }}>
      <SEO title="Home" keywords={[`glinorcal`, `landscape`, `construction`]} />
      <Container fluid className="carousel-wrapper mx-0 px-0">
        <Media query="(max-width: 768px)">
          {matches =>
            matches ? (
              <ImageGallery
                showPlayButton={false}
                showFullscreenButton={false}
                items={mobileimages}
                autoPlay={true}
                slideDuration={1600}
              />
            ) : (
              <ImageGallery
                showPlayButton={false}
                showFullscreenButton={false}
                items={desktopimages}
                autoPlay={true}
                slideDuration={1600}
              />
            )
          }
        </Media>
      </Container>
    </Layout>
  )
}

export default BelMarinKeys
