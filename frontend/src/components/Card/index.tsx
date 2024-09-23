"use client";

import React, { useEffect, useState } from "react";
import styles from "./page.module.scss";
import Image from "next/image";
import Rating from "../Rating";
import Icons from "../Icons";
import Favorite from "../Icons/Favorite";
import Link from "next/link";
import { ICard } from "../Products";

const Card = ({ id, name, price = "12.56", url }: ICard) => {
  const [favorite, setFavorite] = useState(false);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const isFavorite = favorites.some((item: { id: number }) => item.id === id);
    setFavorite(isFavorite);
  }, [id]);

  const handleFavorite = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    const index = favorites.findIndex((item: { id: number }) => item.id === id);
    if (index !== -1) {
      favorites.splice(index, 1);
    } else {
      favorites.push({ id, name, price, url });
    }
    localStorage.setItem("favorites", JSON.stringify(favorites));
    setFavorite(!favorite);
  };

  return (
    <article className={styles.card}>
      <button
        className={styles.card__favorite}
        type="button"
        onClick={handleFavorite}
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
      <div className={styles.card__content}>
        <Rating rating={4.5} ratingCount={123} />
        <Link className={styles.card__title} href={url || "/products"}>
          {name}
        </Link>
        <footer className={styles.card__footer}>
          <p className={styles.card__price}>${price}</p>
          <button className={styles.card__button} type="button">
            <Icons iconName="basket" />
          </button>
        </footer>
      </div>
    </article>
  );
};

export default Card;
