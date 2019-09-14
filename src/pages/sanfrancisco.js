import React from "react"
import { Container } from "react-bootstrap"
import Slider from "react-slick"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "react-image-gallery/styles/css/image-gallery.css"
import image1 from "../images/glinorcal-stone-firepit.jpg"
import image2 from "../images/glinorcal-stone-path-masonry-glass-privacy-walls.jpg"
import image3 from "../images/glinorcal-stone-walls-patio-carpentry.jpg"

const SanFrancisco = () => {

  const settings = {
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  }
  return (
    <Layout pageInfo={{ pageName: "Bel Marin Keys" }}>
      <SEO title="Home" keywords={[`glinorcal`, `landscape`, `construction`]} />
      <Container fluid className="carousel-wrapper mx-0 px-0">
        <Media query="(max-width: 768px)">
          {matches =>
            matches ? (
              <Slider {...settings}>
                <div>
                  <img className="img img-fluid" src={image1} alt="image1" />
                </div>
              </Slider>
            ) : (
              <Slider {...settings}>
                <div>
                  <img
                    className="img img-fluid"
                    src={image1}
                    alt="image1"></img>
                </div>
              </Slider>
            )
          }
        </Media>
      </Container>
    </Layout>
  )
}

export default SanFrancisco
