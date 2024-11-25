import React from "react";
import styles from "./page.module.scss";
import Icons from "../Icons";

interface ICategory {
  text: string;
  isActive?: boolean;
  onClick?: () => void;
}

const Category = ({ text, isActive, onClick }: ICategory) => {
  return (
    <button
      className={`${styles.category} ${isActive && styles._active}`}
      type="button"
      onClick={onClick}
    >
      <Icons iconName={text} />
      <span className={`${styles.category__text} regular-14`}>{text}</span>
    </button>
  );
};

export default Category;
