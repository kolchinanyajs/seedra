"use client";

import React, { useState } from "react";
import styles from "./page.module.scss";
import Image from "next/image";
import Rating from "../Rating";
import Icons from "../Icons";
import Favorite from "../Icons/Favorite";

const Card = () => {
  const [favorite, setFavorite] = useState(false);

  return (
    <article className={styles.card}>
      <button
        className={styles.card__favorite}
        type="button"
        onClick={() => setFavorite(!favorite)}
      >
        {favorite ? (
          <Favorite variant="yellow-fill" />
        ) : (
          <Favorite variant="yellow" />
        )}
      </button>
      <picture className={styles.card__picture}>
        <Image
          className={styles.card__image}
          src="/card-1.jpg"
          alt="card"
          priority={true}
          fill
        />
      </picture>
      <Rating rating={4.5} ratingCount={123} />
      <p className={styles.card__title}>
        Seedra Cilantro Seeds for Planting Indoor and Outdoor
      </p>
      <footer className={styles.card__footer}>
        <p className={styles.card__price}>$12.56</p>
        <button className={styles.card__button} type="button">
          <Icons iconName="basket" />
        </button>
      </footer>
    </article>
  );
};

export default Card;
