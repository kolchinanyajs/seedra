import React from "react";
import styles from "./page.module.scss";

const VARIANT_MODS: { [key: string]: string } = {
  primary: styles._primary,
  secondary: styles._secondary,
  border: styles._border,
  icon: styles._icon,
};

interface IButton {
  className?: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "icon" | "border";
}

const Button = ({ className, children, variant }: IButton) => {
  return (
    <button
      className={`${styles.button}${className ? ` ${styles[className]}` : ""}${
        variant ? ` ${VARIANT_MODS[variant]}` : ""
      }`}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
