import React from "react"
import Media from "react-responsive"
import { Container } from "react-bootstrap"
import Slider from "react-slick"

import Layout from "../components/layout"
import SEO from "../components/seo"

// import "react-image-gallery/styles/css/image-gallery.css"
import image1L from "../images/home/glinorcal-stone-firepitL.jpg"
import image2L from "../images/home/bel-marin-4L.jpg"
import image3L from "../images/home/piedmont-4L.jpg"
import image1P from "../images/home/glinorcal-stone-firepitP.jpg"
import image2P from "../images/home/bel-marin-4P.jpg"
import image3P from "../images/home/piedmont-4P.jpg"

const firepit = "Custom stone firepit on the Belvedere Lagoon"
const belmarin = "Custom stonework and glass privacy fence in Bel Marin Keys"
const piedmont = "Grand estate landscape in Piedmont, CA"

const IndexPage = () => {
  const settings = {
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
  }
  return (
    <Layout pageInfo={{ pageName: "index" }}>
      <SEO title="Home" keywords={[`glinorcal`, `landscape`, `construction`]} />
      <Container fluid className="carousel-wrapper mx-0 px-0">
        <Media query="(min-width: 768px)">
          {matches =>
            matches ? (
              <Slider {...settings}>
                <div>
                  <img className="img img-fluid" src={image1L} alt={firepit} />
                </div>
                <div>
                  <img className="img img-fluid" src={image2L} alt={belmarin} />
                </div>
                <div>
                  <img className="img img-fluid" src={image3L} alt={piedmont} />
                </div>
              </Slider>
            ) : (
              <Slider {...settings}>
                <div>
                  <img className="img img-fluid" src={image1L} alt={firepit} />
                </div>
                <div>
                  <img className="img img-fluid" src={image2P} alt={belmarin} />
                </div>
                <div>
                  <img className="img img-fluid" src={image3P} alt={piedmont} />
                </div>
              </Slider>
            )
          }
        </Media>
      </Container>
    </Layout>
  )
}

export default IndexPage
