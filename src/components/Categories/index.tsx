import React from "react";
import Category from "../Category";
import styles from "./page.module.scss";

const data = [
  {
    icon: "all",
    text: "All",
  },
  {
    icon: "all",
    text: "BUNDLES",
  },
  {
    icon: "all",
    text: "HERBS",
  },
  {
    icon: "all",
    text: "VEGETABLES",
  },
  {
    icon: "all",
    text: "FRUITS",
  },
  {
    icon: "all",
    text: "SUPPLIES",
  },
  {
    icon: "all",
    text: "FLOWERS",
  },
];

const Categories = () => {
  return (
    <ul className={styles.categories}>
      {data.map(({ icon, text }) => (
        <Category key={text} icon={icon} text={text} />
      ))}
    </ul>
  );
};

export default Categories;
