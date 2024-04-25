import React from "react";
import styles from "./page.module.scss";
import Card from "../Card";

const Cards = () => {
  return (
    <section className={styles.cards}>
      {[...Array(6)].map((_, index) => (
        <Card key={index} />
      ))}
    </section>
  );
};

export default Cards;
