import Container from "@/components/Container";
import React from "react";
import styles from "./page.module.scss";

import ProductsGallery from "@/components/ProductsGallery";
import Label from "@/components/Label";
import Quantity from "@/components/Quantity";
import Input from "@/components/Input";
import { packages } from "./data";
import Button from "@/components/Button";
import Icons from "@/components/Icons";
import Favorite from "@/components/Icons/Favorite";

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
            <div
              className={`${styles["products__packages"]} ${styles["packages"]}`}
            >
              {packages.map(({ name, price }) => (
                <Input
                  className={"_package"}
                  label={name}
                  type="radio"
                  price={price}
                  name="package"
                />
              ))}
            </div>
            <div className={styles["products__prices"]}>
              <div className={styles["products__price"]}>
                <p
                  className={`${styles["products__old-price-value"]} medium-16 text-secondary`}
                >
                  $15.56
                </p>
                <p className={styles["products__actual-price-value"]}>$12.56</p>
              </div>
              <div className={styles["products__buttons"]}>
                <button className={styles["products__favorite"]} type="button">
                  <Favorite variant="green" />
                </button>
                <Button className={styles["products__add"]} variant="primary">
                  Add to cart
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Products;
