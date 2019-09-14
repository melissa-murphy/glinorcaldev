import React from "react"
import Media from "react-responsive"
import Slider from "react-slick"
import { Container } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "react-image-gallery/styles/css/image-gallery.css"
import image1 from "../images/bel-marin-keys/bel-marin-1.jpg"
import image1P from "../images/bel-marin-keys/bel-marin-1P.jpg"
import image1L from "../images/bel-marin-keys/bel-marin-1L.jpg"
import image2 from "../images/bel-marin-keys/bel-marin-2.jpg"
import image3 from "../images/bel-marin-keys/bel-marin-3.jpg"
import image4 from "../images/bel-marin-keys/bel-marin-4.jpg"
import image5 from "../images/bel-marin-keys/bel-marin-5.jpg"
import image6 from "../images/bel-marin-keys/bel-marin-6.jpg"
import image7 from "../images/bel-marin-keys/bel-marin-7.jpg"
import image8 from "../images/bel-marin-keys/bel-marin-8.jpg"
import image9 from "../images/bel-marin-keys/bel-marin-9.jpg"

const BelMarinKeys = () => {
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
                  <img className="img img-fluid" src={image1P} alt="image1" />
                </div>
              </Slider>
            ) : (
              <Slider {...settings}>
                <div>
                  <img
                    className="img img-fluid"
                    src={image1L}
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

export default BelMarinKeys
