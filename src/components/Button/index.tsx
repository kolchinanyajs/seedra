import React from "react";
import styles from "./page.module.scss";

interface IButton {
  children: React.ReactNode;
  className?: string;
}

const Button = ({ children, className }: IButton) => {
  return (
    <button className={`${styles.button} ${className}`}>{children}</button>
  );
};

export default Button;
