import React from "react";
import Accordion from "../Accordion";
import styles from "./page.module.scss";

const Filters = () => {
  return (
    <aside className={styles["filters"]}>
      <p className={`${styles["filters__title"]} regular-14 ttu`}>Filters</p>
      <Accordion title="Seed type">1</Accordion>
      <Accordion title="Accordion">1</Accordion>
    </aside>
  );
};

export default Filters;
