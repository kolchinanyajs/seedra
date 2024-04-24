import React from "react";
import styles from "./page.module.scss";
import Container from "../Container";

const VARIANT_MODS: { [key: string]: string } = {
  hero: styles._hero,
};

interface IBanner {
  className?: string;
  title: string;
  description: string;
}

const Banner = ({ className, title, description }: IBanner) => {
  return (
    <article
      className={`${styles.banner}${
        className ? ` ${VARIANT_MODS[className]}` : ""
      }`}
    >
      <Container className={styles.banner__container}>
        <p className={`${styles.banner__title} h3`}>{title}</p>
        <p className={`${styles.banner__description} medium-16`}>
          {description}
        </p>
      </Container>
    </article>
  );
};

export default Banner;
