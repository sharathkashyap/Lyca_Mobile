import React from "react";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from "./Carousel.module.css";

const images = [
  "https://s3-eu-west-2.amazonaws.com/lycamobileukwebsite/lycauk/dev/lycamobile-uk-cms/wp-content/uploads/2022/06/01065615/Uk_web.jpg",
  "https://s3-eu-west-2.amazonaws.com/lycamobileukwebsite/lycauk/dev/lycamobile-uk-cms/wp-content/uploads/2022/06/29091408/UK_Festive_banner_Validity_extension_web.webp",
  "https://s3-eu-west-2.amazonaws.com/lycamobileukwebsite/lycauk/dev/lycamobile-uk-cms/wp-content/uploads/2022/06/02062541/Auto-renewal-offer.webp",
 ];
const CarouselBar = () => {
  return (
    <div className={classes.box}>
      <Carousel
        autoPlay
        useKeyboardArrows={true}
        stopOnHover={true}
        infiniteLoop={true}
       showIndicators={false}
       showStatus={false}
        interval="2000"
        transitionTime="1200"
        showThumbs={false}
      >
        {images.map((URL, index) => (
          <div className={classes.slide}>
            <img alt="sample_file" src={URL} key={index} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};
export default CarouselBar;
