import React from "react";
import styles from "./page.module.scss";
import Icons from "../Icons";

interface ICategory {
  icon: string;
  text: string;
}

const Category = ({ icon, text }: ICategory) => {
  return (
    <button className={styles.category} type="button">
      <Icons iconName={icon} />
      <span className={`${styles.category__text} regular-14`}>{text}</span>
    </button>
  );
};

export default Category;
