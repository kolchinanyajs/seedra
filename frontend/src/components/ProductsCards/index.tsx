import React from "react";

import styles from "./page.module.scss";
import Card from "../Card";
import { ICard } from "../Products";

const ProductsCards = ({
  products: { cards },
}: {
  products: { cards: ICard[] };
}) => {
  return (
    <div className={styles["products-cards"]}>
      {cards.map(({ id, name, price = "12.56", url }, index) => (
        <Card id={id} key={index} name={name} price={price} url={url} />
      ))}
    </div>
  );
};

export default ProductsCards;
