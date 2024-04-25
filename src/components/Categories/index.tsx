import React from "react";
import Category from "../Category";
import styles from "./page.module.scss";

const Categories = () => {
  return (
    <ul className={styles.categories}>
      <li className={styles.categories__item}>
        <Category icon="all" text="All" />
        <Category icon="all" text="BUNDLES" />
        <Category icon="all" text="HERBS" />
        <Category icon="all" text="VEGETABLES" />
        <Category icon="all" text="FRUITS" />
        <Category icon="all" text="SUPPLIES" />
        <Category icon="all" text="FLOWERS" />
      </li>
    </ul>
  );
};

export default Categories;
