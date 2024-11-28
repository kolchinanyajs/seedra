"use client";
import React, { useState } from "react";
import Category from "../Category";
import styles from "./page.module.scss";
import { categories } from "./data";

interface ICategories {
  activeIndex: number;
  onChangeCategory: (index: number, text: string) => void;
}

const Categories = ({ activeIndex, onChangeCategory }: ICategories) => {
  return (
    <ul className={styles.categories}>
      {categories.map(({ text }, index) => (
        <Category
          key={text}
          text={text}
          isActive={index === activeIndex}
          onClick={() => onChangeCategory(index, text)}
        />
      ))}
    </ul>
  );
};

export default Categories;
