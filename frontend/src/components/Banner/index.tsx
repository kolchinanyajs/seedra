import React from "react";
import styles from "./page.module.scss";
import Container from "../Container";

interface IBanner {
  caption: string;
  description: string;
}

const Banner = ({ caption, description }: IBanner) => {
  return (
    <article className={`${styles.banner}`}>
      <Container className={styles.banner__container}>
        <p className={`${styles.banner__title} h3`}>{caption}</p>
        <p className={`${styles.banner__description} medium-16`}>
          {description}
        </p>
      </Container>
    </article>
  );
};

export default Banner;
