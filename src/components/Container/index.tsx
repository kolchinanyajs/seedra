import React from "react";
import styles from "./page.module.scss";

interface IContainer {
  children: React.ReactNode;
}

const Container = ({ children }: IContainer) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
