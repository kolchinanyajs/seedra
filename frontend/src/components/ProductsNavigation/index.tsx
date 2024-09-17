import React from "react";
import Search from "../Search";

import styles from "./page.module.scss";

const ProductsNavigation = () => {
  return (
    <div className={styles["products-navigation"]}>
      <Search />
      <>Select</>
    </div>
  );
};

export default ProductsNavigation;
