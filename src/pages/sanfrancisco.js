import React from "react"
import Media from "react-responsive"
import { Container } from "react-bootstrap"
import Slider from "react-slick"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "react-image-gallery/styles/css/image-gallery.css"
import image1L from "../images/san-francisco/sf-1L.jpg"
import image1P from "../images/san-francisco/sf-1P.jpg"
import image3P from "../images/san-francisco/sf-3P.jpg"
import image4L from "../images/san-francisco/sf-4L.jpg"
import image4P from "../images/san-francisco/sf-4P.jpg"
import image5L from "../images/san-francisco/sf-5L.jpg"
import image5P from "../images/san-francisco/sf-5P.jpg"
import image6L from "../images/san-francisco/sf-6L.jpg"
import image6P from "../images/san-francisco/sf-6P.jpg"
import image7L from "../images/san-francisco/sf-7L.jpg"
import image7P from "../images/san-francisco/sf-7P.jpg"

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
                  <img className="img img-fluid" src={image1P} alt="image1" />
                </div>{" "}
                <div>
                  <img className="img img-fluid" src={image3P} alt="image1" />
                </div>{" "}
                <div>
                  <img className="img img-fluid" src={image4P} alt="image1" />
                </div>{" "}
                <div>
                  <img className="img img-fluid" src={image5P} alt="image1" />
                </div>{" "}
                <div>
                  <img className="img img-fluid" src={image6P} alt="image1" />
                </div>{" "}
                <div>
                  <img className="img img-fluid" src={image7P} alt="image1" />
                </div>
              </Slider>
            ) : (
              <Slider {...settings}>
                <div>
                  <img className="img img-fluid" src={image1L} alt="image1L" />
                </div>
                <div>
                  <img className="img img-fluid" src={image4L} alt="image4L" />
                </div>
                <div>
                  <img className="img img-fluid" src={image5L} alt="image1" />
                </div>
                <div>
                  <img className="img img-fluid" src={image6L} alt="image1" />
                </div>
                <div>
                  <img className="img img-fluid" src={image7L} alt="image1" />
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
