import React from "react";
import Accordion from "../Accordion";
import styles from "./page.module.scss";
import Input from "../Input";
import { seedType } from "./data";

const Filters = () => {
  return (
    <aside className={styles["filters"]}>
      <p className={`${styles["filters__title"]} regular-14 ttu`}>Filters</p>
      <Accordion title="Seed type">
        <div className={styles["filters__checkboxes"]}>
          {seedType.map(({ label }) => (
            <Input label={label} key={label} />
          ))}
        </div>
      </Accordion>
      <Accordion title="Accordion">1</Accordion>
    </aside>
  );
};

export default Filters;
