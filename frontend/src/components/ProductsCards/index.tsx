import React from "react";

import styles from "./page.module.scss";
import Card from "../Card";

const ProductsCards = () => {
  return (
    <div className={styles["products-cards"]}>
      {[...Array(6)].map((_, index) => (
        <Card key={index} />
      ))}
    </div>
  );
};

export default ProductsCards;
