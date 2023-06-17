import bannerData from "../../Constants/CarouselBannerData";

import { Box, styled } from "@mui/material";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CarouselBanner = () => {
  return (
    <Carousel 
    responsive={responsive} 
    infinite={true}
    autoPlay={true}
    >
      {bannerData.map((data) => (
        <img
          src={data.url}
          alt="Banner"
          style={{ width: "100%", height: 280 }}
        />
      ))}
    </Carousel>
  );
};

export default CarouselBanner;
