import React from "react"
import Media from "react-responsive"
import { Container } from "react-bootstrap"
import Slider from "react-slick"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "react-image-gallery/styles/css/image-gallery.css"
import image1 from "../images/glinorcal-stone-firepit.jpg"
import image2 from "../images/glinorcal-stone-path-masonry-glass-privacy-walls.jpg"
import image3 from "../images/glinorcal-stone-walls-patio-carpentry.jpg"
import image1P from "../images/glinorcal-stone-firepit-portrait.jpg"
import image2P from "../images/glinorcal-stone-path-masonry-glass-privacy-walls-portrait.jpg"
import image3P from "../images/glinorcal-stone-walls-patio-carpentry-portrait.jpg"

const IndexPage = () => {
  const settings = {
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  }
  return (
    <Layout pageInfo={{ pageName: "index" }}>
      <SEO title="Home" keywords={[`glinorcal`, `landscape`, `construction`]} />
      <Container fluid className="carousel-wrapper mx-0 px-0">
        <Media query="(max-width: 768px)">
          {matches =>
            matches ? (
              <Slider {...settings}>
                <img className="img img-fluid" src={image1P} alt="image1P" />

                <img className="img img-fluid" src={image2P} alt="image2P" />

                <img className="img img-fluid" src={image3P} alt="image3P" />
              </Slider>
            ) : (
              <Slider {...settings}>
                <img className="img img-fluid" src={image1} alt="image1" />

                <img className="img img-fluid" src={image2} alt="image2" />

                <img className="img img-fluid" src={image3} alt="image3" />
              </Slider>
            )
          }
        </Media>
      </Container>
    </Layout>
  )
}

export default IndexPage
