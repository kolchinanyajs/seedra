"use client";
import React, { useState } from "react";
import styles from "./page.module.scss";
import Icons from "../Icons";

const Quantity = () => {
  const [quantity, setQuantity] = useState(2);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity <= 1) return;
    setQuantity(quantity - 1);
  };

  return (
    <div className={styles["quantity"]}>
      <button
        className={styles["quantity__button"]}
        type="button"
        onClick={handleDecrement}
        disabled={quantity <= 1}
      >
        <Icons iconName="minus" />
      </button>
      <output className={styles["quantity__value"]}>{quantity}</output>
      <button
        className={styles["quantity__button"]}
        type="button"
        onClick={handleIncrement}
      >
        <Icons iconName="plus" />
      </button>
    </div>
  );
};

export default Quantity;
