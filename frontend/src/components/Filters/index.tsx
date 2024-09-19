import React from "react";
import Accordion from "../Accordion";
import styles from "./page.module.scss";
import Input from "../Input";
import { checkboxes } from "./data";

import RangeSlider from "../RangeSlider";

const Filters = () => {
  return (
    <aside className={styles["filters"]}>
      <p className={`${styles["filters__title"]} regular-14 ttu`}>Filters</p>
      <Accordion title="Seed type">
        <div className={styles["filters__checkboxes"]}>
          {checkboxes.map(({ label }) => (
            <Input label={label} key={label} />
          ))}
        </div>
      </Accordion>
      <Accordion title="Featured">
        <div className={styles["filters__checkboxes"]}>
          {checkboxes.map(({ label }) => (
            <Input label={label} key={label} />
          ))}
        </div>
      </Accordion>
      <Accordion title="Growing Conditions">
        <div className={styles["filters__checkboxes"]}>
          {checkboxes.map(({ label }) => (
            <Input label={label} key={label} />
          ))}
        </div>
      </Accordion>
      <Accordion title="Price">
        <RangeSlider />
      </Accordion>
    </aside>
  );
};

export default Filters;
