"use client";
import React, { useState } from "react";
import Category from "../Category";
import styles from "./page.module.scss";
import { categories } from "./data";

const Categories = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleChangeCategory = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <ul className={styles.categories}>
      {categories.map(({ text }, index) => (
        <Category
          key={text}
          text={text}
          isActive={index === activeIndex}
          onClick={() => handleChangeCategory(index)}
        />
      ))}
    </ul>
  );
};

export default Categories;
