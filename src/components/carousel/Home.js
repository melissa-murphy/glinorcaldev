import React from "react"
import Carousel from "@brainhubeu/react-carousel"
import "@brainhubeu/react-carousel/lib/style.css"

import Image1 from "./glinorcal-stone-firepit"
import Image2 from "./glinorcal-stone-path-masonry-glass-privacy-walls"
import Image3 from "./glinorcal-stone-walls-patio-carpentry"
console.log(Image1)
console.log(Image2)
console.log(Image3)

const HomeCarousel = () => (
  <div
    className="HomeCarousel"
    style={{ width: "600px", margin: "auto", padding: "50px" }}
  >
    <Carousel arrows infinite>
      <img src={Image1} />
      <img src={Image2} />
      <img src={Image3} />
    </Carousel>
  </div>
)

export default HomeCarousel
