import React from "react";
import styles from "./page.module.scss";
import Image from "next/image";
import Quantity from "../Quantity";

interface ICardCheckout {
  name: string;
  price: number;
}

const CardCheckout = ({ name, price }: ICardCheckout) => {
  return (
    <article className={styles["card-checkout"]}>
      <div className={styles["card-checkout__img-wrapper"]}>
        <Image src="/card-1.jpg" alt="checkout" fill sizes="100%" />
      </div>
      <p className={`${styles["card-checkout__title"]} regular-14`}>{name}</p>
      <Quantity className={styles["card-checkout__quantity"]} />
      <p className={`${styles["card-checkout__price"]}`}>${price}</p>
      <p className={`${styles["card-checkout__total"]}`}>$12.56</p>
    </article>
  );
};

export default CardCheckout;
