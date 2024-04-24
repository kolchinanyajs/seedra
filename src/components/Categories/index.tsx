import React from "react";
import Category from "../Category";
import styles from "./page.module.scss";

const Categories = () => {
  return (
    <ul className={styles.categories}>
      <li className={styles.categories__item}>
        <Category />
      </li>
    </ul>
  );
};

export default Categories;
