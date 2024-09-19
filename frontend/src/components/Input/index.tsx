import React from "react";
import styles from "./page.module.scss";

interface IInput {
  label: string;
}

const Input = ({ label }: IInput) => {
  return (
    <label className={styles["input"]}>
      <input
        className={styles["input__input"]}
        type="checkbox"
        name="seed-type"
      />
      <span className={styles["input__box"]}></span>
      <span className={`${styles["input__label"]} regular-14 text-secondary`}>
        {label}
      </span>
    </label>
  );
};

export default Input;
