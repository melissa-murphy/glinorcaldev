import React from "react"
import Media from "react-responsive"
import Slider from "react-slick"
import { Container } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "react-image-gallery/styles/css/image-gallery.css"
import image1P from "../images/bel-marin-keys/bel-marin-1P.jpg"
import image2L from "../images/bel-marin-keys/bel-marin-2L.jpg"
import image2P from "../images/bel-marin-keys/bel-marin-2P.jpg"
import image3P from "../images/bel-marin-keys/bel-marin-3P.jpg"
import image4P from "../images/bel-marin-keys/bel-marin-4P.jpg"
import image4L from "../images/bel-marin-keys/bel-marin-4L.jpg"
import image5P from "../images/bel-marin-keys/bel-marin-5P.jpg"
import image6P from "../images/bel-marin-keys/bel-marin-6P.jpg"
import image6L from "../images/bel-marin-keys/bel-marin-6L.jpg"
import image7P from "../images/bel-marin-keys/bel-marin-7P.jpg"
import image8P from "../images/bel-marin-keys/bel-marin-8P.jpg"
import image9P from "../images/bel-marin-keys/bel-marin-9P.jpg"
import image9L from "../images/bel-marin-keys/bel-marin-9L.jpg"

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
                  <img className="img img-fluid" src={image1P} alt="image1P" />
                </div>
                <div>
                  <img className="img img-fluid" src={image2P} alt="image1P" />
                </div>
                <div>
                  <img className="img img-fluid" src={image3P} alt="image1P" />
                </div>
                <div>
                  <img className="img img-fluid" src={image4P} alt="image1P" />
                </div>
                <div>
                  <img className="img img-fluid" src={image5P} alt="image1P" />
                </div>
                <div>
                  <img className="img img-fluid" src={image6P} alt="image1P" />
                </div>
                <div>
                  <img className="img img-fluid" src={image7P} alt="image1P" />
                </div>
                <div>
                  <img className="img img-fluid" src={image8P} alt="image1P" />
                </div>
                <div>
                  <img className="img img-fluid" src={image9P} alt="image1P" />
                </div>
              </Slider>
            ) : (
              <Slider {...settings}>
                <div>
                  <img className="img img-fluid" src={image2L} alt="image1" />
                </div>
                <div>
                  <img className="img img-fluid" src={image4L} alt="image1" />
                </div>
                <div>
                  <img className="img img-fluid" src={image6L} alt="image1" />
                </div>
                <div>
                  <img className="img img-fluid" src={image9L} alt="image1" />
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
