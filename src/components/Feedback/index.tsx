"use client";

import React from "react";
import styles from "./page.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";

const Feedback = () => {
  return (
    <section className={styles.feedback}>
      <h2 className={`${styles.feedback__title} h2`}>What out clients say</h2>
      <div>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          centeredSlides={true}
          autoplay={true}
        >
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Feedback;
