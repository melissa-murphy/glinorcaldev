import React from "react"
import Media from "react-responsive"
import { Container } from "react-bootstrap"
import Slider from "react-slick"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "react-image-gallery/styles/css/image-gallery.css"
import image1 from "../images/san-rafael/san-rafael-1.jpg"
import image2L from "../images/san-rafael/san-rafael-2L.jpg"
import image2P from "../images/san-rafael/san-rafael-2P.jpg"
import image3P from "../images/san-rafael/san-rafael-3P.jpg"
import image4L from "../images/san-rafael/san-rafael-4L.jpg"

const SanRafael = () => {
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
                  <img className="img img-fluid" src={image3P} alt="image1" />
                </div>
                <div>
                  <img className="img img-fluid" src={image2P} alt="image3" />
                </div>
              </Slider>
            ) : (
              <Slider {...settings}>
                <div>
                  <img
                    className="img img-fluid"
                    src={image2L}
                    alt="image2L"></img>
                </div>
                <div>
                  <img
                    className="img img-fluid"
                    src={image4L}
                    alt="image4L"></img>
                </div>
              </Slider>
            )
          }
        </Media>
      </Container>
    </Layout>
  )
}

export default SanRafael
