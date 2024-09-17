"use client";

import React, { useState, useEffect } from "react";
import styles from "./page.module.scss";
import Card from "../Card";
import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";

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
    <div className={`${styles.cards} slider`}>
      {isMobile ? (
        <Swiper slidesPerView={1.08} spaceBetween={11}>
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
