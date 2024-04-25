import React from "react";
import styles from "./page.module.scss";
import Container from "../Container";
import Categories from "../Categories";
import Cards from "../Cards";

const Products = () => {
  return (
    <section className={styles.products}>
      <Container className={styles.products__container}>
        <header>
          <h2 className={`${styles.products__title} h2`}>Our products.</h2>
        </header>
        <Categories />
        <Cards />
      </Container>
    </section>
  );
};

export default Products;
