import React from "react";
import Icons from "../Icons";
import styles from "./page.module.scss";

interface ILabel {
  iconName: string;
  text: string;
}

const Label = ({ iconName, text }: ILabel) => {
  return (
    <div
      className={`${styles["label"]} ${
        text === "available" && styles["_available"]
      }`}
    >
      <Icons iconName={iconName} />
      <span className={`${styles["label__text"]} regular-14`}>{text}</span>
    </div>
  );
};

export default Label;
