import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import './portfolioGallery.scss'
// import "./styles.css";

// import required modules

const PortfolioGallery = () => {
    return (
        <div className="asd">
          <Swiper
            slidesPerView={4}
            spaceBetween={20}
            className="mySwiper"
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
          </Swiper>
        </div>
      );
}
export default PortfolioGallery;
