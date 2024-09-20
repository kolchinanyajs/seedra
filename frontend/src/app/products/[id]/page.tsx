import Container from "@/components/Container";
import React from "react";
import styles from "./page.module.scss";

import ProductsGallery from "@/components/ProductsGallery";
import Label from "@/components/Label";
import Quantity from "@/components/Quantity";

const Products = ({ params }: { params: { id: string } }) => {
  return (
    <section className={styles["products"]}>
      <Container>
        <div className={styles["products__grid"]}>
          <div className={styles["products__gallery"]}>
            <ProductsGallery />
          </div>
          <div className={styles["products__info"]}>
            <h1 className={`${styles["products__title"]} h3`}>
              SEEDRA Corn - Bodacious Hybrid Seeds for Indoor and Outdoor
              Planting
            </h1>
            <ul className={styles["products__labels"]}>
              <li className={styles["products__label"]}>
                <Label iconName="available" text="available" />
              </li>
              <li className={styles["products__label"]}>
                <Label iconName="tomato" text="vegetable" />
              </li>
            </ul>
            <div
              className={`${styles["products__quantity"]} ${styles["quantity"]}`}
            >
              <header className={styles["quantity__header"]}>
                <p className={styles["quantity__title"]}>
                  <span>Size</span>
                  <span>2 pack</span>
                </p>
                <Quantity />
              </header>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Products;
