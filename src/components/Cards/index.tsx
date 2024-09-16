"use client";

import React, { useState, useEffect } from "react";
import styles from "./page.module.scss";
import Card from "../Card";
import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";

const Cards = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return (
    <div className={`${styles.cards} cards`}>
      {isMobile ? (
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          slidesPerView={1.07}
          spaceBetween={11}
          pagination={{ clickable: true }}
          navigation
        >
          {[...Array(6)].map((_, index) => (
            <SwiperSlide key={index}>
              <Card />
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <div className={styles.cards__container}>
          {[...Array(6)].map((_, index) => (
            <Card key={index} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Cards;
