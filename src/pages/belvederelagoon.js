import React from "react"
import Media from "react-responsive"
import { Container } from "react-bootstrap"
import Slider from "react-slick"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "react-image-gallery/styles/css/image-gallery.css"
import image1L from "../images/belvedere-lagoon/belvedere-lagoon-1L.jpg"
import image1P from "../images/belvedere-lagoon/belvedere-lagoon-1P.jpg"
import image2L from "../images/belvedere-lagoon/belvedere-lagoon-2L.jpg"
import image2P from "../images/belvedere-lagoon/belvedere-lagoon-2P.jpg"
import image3P from "../images/belvedere-lagoon/belvedere-lagoon-3P.jpg"
import image4P from "../images/belvedere-lagoon/belvedere-lagoon-4P.jpg"

const BelvedereLagoon = () => {
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
                </div>{" "}
                <div>
                  <img className="img img-fluid" src={image2P} alt="image1" />
                </div>{" "}
                <div>
                  <img className="img img-fluid" src={image3P} alt="image1" />
                </div>{" "}
                <div>
                  <img className="img img-fluid" src={image4P} alt="image1" />
                </div>{" "}
              </Slider>
            ) : (
              <Slider {...settings}>
                <div>
                  <img className="img img-fluid" src={image1L} alt="image1" />
                </div>
                <div>
                  <img className="img img-fluid" src={image2L} alt="image1" />
                </div>
              </Slider>
            )
          }
        </Media>
      </Container>
    </Layout>
  )
}

export default BelvedereLagoon
