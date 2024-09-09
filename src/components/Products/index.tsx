import React from "react";
import styles from "./page.module.scss";
import Container from "../Container";
import Categories from "../Categories";
import Cards from "../Cards";
import Button from "../Button";

const Products = () => {
  return (
    <section className={styles.products}>
      <Container className={styles.products__container}>
        <header className={styles.products__header}>
          <h2 className={`${styles.products__title} h2`}>Our products.</h2>
          <Button className={`${styles.products__button}`} variant="border">
            View all (12)
          </Button>
        </header>
        <Categories />
        <Cards />
      </Container>
    </section>
  );
};

export default Products;
