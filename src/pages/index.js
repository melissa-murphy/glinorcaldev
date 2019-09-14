import React from "react"
import { Container } from "react-bootstrap"
import Slider from "react-slick"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "react-image-gallery/styles/css/image-gallery.css"
import image1 from "../images/glinorcal-stone-firepit.jpg"
import image2 from "../images/glinorcal-stone-path-masonry-glass-privacy-walls.jpg"
import image3 from "../images/glinorcal-stone-walls-patio-carpentry.jpg"

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
        <Slider {...settings}>
          <div>
            <img className="img img-fluid" src={image1} alt="image1" />
          </div>
          <div>
            <img className="img img-fluid" src={image2} alt="image2" />
          </div>
          <div>
            <img className="img img-fluid" src={image3} alt="image3" />
          </div>
        </Slider>
      </Container>
    </Layout>
  )
}

export default IndexPage
