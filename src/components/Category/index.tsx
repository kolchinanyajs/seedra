"use client";

import React, { useState } from "react";
import styles from "./page.module.scss";
import Icons from "../Icons";

interface ICategory {
  icon: string;
  text: string;
}

const Category = ({ icon, text }: ICategory) => {
  const [active, setActive] = useState(false);

  return (
    <button
      className={`${styles.category} ${active && styles._active}`}
      type="button"
      onClick={() => setActive(!active)}
    >
      <Icons iconName={icon} />
      <span className={`${styles.category__text} regular-14`}>{text}</span>
    </button>
  );
};

export default Category;
