import React from "react";
import Container from "../Container";

import styles from "./page.module.scss";
import Link from "next/link";

const menu = [
  {
    name: "All products",
    link: "/products",
  },
  {
    name: "About seedra",
    link: "/about",
  },
  {
    name: "Our blog",
    link: "/blog",
  },
  {
    name: "Contacts",
    link: "/contact",
  },
];

const Header = () => {
  return (
    <header className={styles.header}>
      <Container className={styles.header__container}>
        <Link className={styles.header__logo} href="/">
          <img src="/logo.svg" alt="logo" />
        </Link>
        <nav className={styles.header__nav}>
          <ul className={`${styles.header__menu} ${styles.menu}`}>
            {menu.map(({ name, link }) => (
              <li className={styles.menu__item} key={name}>
                <Link className={styles.menu__link} href={link}>
                  {name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
