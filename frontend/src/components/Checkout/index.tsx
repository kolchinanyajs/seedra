import React from "react";
import styles from "./page.module.scss";
import CardCheckout from "../CardCheckout";

interface ICard {
  id: number;
  name: string;
  price: number;
}

interface ICheckout {
  goods: ICard[];
}

const Checkout = ({ goods }: ICheckout) => {
  console.log(goods);
  return (
    <ul className={styles["checkout"]}>
      {goods.map((item) => (
        <li key={item.id} className={styles["checkout__item"]}>
          <CardCheckout name={item.name} price={item.price} />
        </li>
      ))}
    </ul>
  );
};

export default Checkout;
