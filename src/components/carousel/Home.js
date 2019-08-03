import React from "react";
import Carousel from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";

import Image1 from "../../images/glinorcal-stone-firepit";
import Image2 from "../../images/glinorcal-stone-path-masonry-glass-privacy-walls";
import Image3 from "../../images/glinorcal-stone-walls-patio-carpentry";

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
  );
  
  export default HomeCarousel;