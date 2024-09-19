import React from "react";
import Filters from "../Filters";
import ProductsCards from "../ProductsCards";

import styles from "./page.module.scss";

const ProductsGrid = () => {
  return (
    <div className={styles["products-grid"]}>
      <Filters hideMobile={true} />
      <ProductsCards />
    </div>
  );
};

export default ProductsGrid;
