"use client";

import React from "react";
import "swiper/css";
import styles from "./page.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import FeedbackCard from "../FeedbackCard";

const Feedback = () => {
  return (
    <section className={styles.feedback}>
      <h2 className={`${styles.feedback__title} h2`}>What out clients say</h2>
      <Swiper
        spaceBetween={30}
        slidesPerView={2.58}
        centeredSlides={true}
        loop={true}
        modules={[Autoplay, Pagination, Navigation]}
        className={styles.feedback__swiper}
      >
        {[...Array(6)].map((_, index) => (
          <SwiperSlide key={index} className={styles.feedback__slide}>
            <FeedbackCard />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Feedback;
