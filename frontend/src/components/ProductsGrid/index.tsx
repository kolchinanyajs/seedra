import React from "react";
import Filters from "../Filters";
import ProductsCards from "../ProductsCards";

import styles from "./page.module.scss";
import { ICard } from "../Products";

interface IProductsGrid {
  products: { cards: ICard[] };
}

const ProductsGrid = (products: IProductsGrid) => {
  return (
    <div className={styles["products-grid"]}>
      <Filters hideMobile={true} />
      <ProductsCards {...products} />
    </div>
  );
};

export default ProductsGrid;
