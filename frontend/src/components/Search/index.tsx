import React from "react";
import styles from "./page.module.scss";
import Icons from "../Icons";

const Search = () => {
  return (
    <form className={styles.search}>
      <Icons iconName="search" />
      <input
        className={styles.search__input}
        type="text"
        placeholder="Search"
      />
    </form>
  );
};

export default Search;
