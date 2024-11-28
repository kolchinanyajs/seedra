"use client";
import React, { useState } from "react";
import styles from "./page.module.scss";
import Container from "../Container";
import Categories from "../Categories";
import Cards from "../Cards";
import Button from "../Button";

export interface ICard {
  id?: number;
  name?: string;
  price?: string;
  url?: string;
  category?: string;
}

interface IProducts {
  caption: string;
  cards: ICard[];
}

const Products = ({ caption, cards }: IProducts) => {
  const [category, setCategory] = useState("all");
  const [activeIndex, setActiveIndex] = useState(0);

  const handleChangeCategory = (index: number, text: string) => {
    setCategory(text);
    setActiveIndex(index);
  };

  const filteredCards = cards.filter((card) => card.category === category);
  const cardsToDisplay =
    filteredCards.length > 0 ? filteredCards : category === "all" ? cards : [];

  return (
    <section className={styles.products}>
      <Container className={styles.products__container}>
        <header className={styles.products__header}>
          <h2 className={`${styles.products__title} h2`}>{caption}</h2>
          <Button className={`${styles.products__button}`} variant="border">
            View all (12)
          </Button>
        </header>
        <Categories
          activeIndex={activeIndex}
          onChangeCategory={handleChangeCategory}
        />
        <Cards cards={cardsToDisplay} />
      </Container>
    </section>
  );
};

export default Products;
