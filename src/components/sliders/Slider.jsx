import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import slides from "./mock.json";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./SwipeSlider.css";
const Slider = ({ seconds }) => {
  return (
    <Swiper
      style={{ height: "300px" }}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={2}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      {seconds.map((slide) => (
        <div className="s-container">
          {/* <div>{slide.title}</div> */}
          <SwiperSlide key={slide.pcImageUrl}>
            <img src={slide.pcImageUrl} alt={slide.title} />
          </SwiperSlide>
        </div>
      ))}
    </Swiper>
  );
};

export default Slider;
