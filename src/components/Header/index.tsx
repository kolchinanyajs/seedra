import React from "react";
import Container from "../Container";

import styles from "./page.module.scss";
import Link from "next/link";
import Icons from "../Icons";
import Search from "../Search";
import Button from "../Button";

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
        <ul className={`${styles.header__socials} ${styles.socials}`}>
          <li className={styles.socials__item}>
            <a
              className={styles.socials__link}
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <Icons iconName="instagram" />
            </a>
          </li>
          <li className={styles.socials__item}>
            <a
              className={styles.socials__link}
              href="https://www.instagram.com"
              target="_blank"
              rel="noreferrer"
            >
              <Icons iconName="facebook" />
            </a>
          </li>
        </ul>
        <Search />
        <ul className={styles.header__buttons}>
          <li>
            <Button>
              <Icons iconName="favorite" />
            </Button>
          </li>
          <li>
            <Button>
              <Icons iconName="basket" />
            </Button>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
