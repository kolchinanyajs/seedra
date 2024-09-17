import React from "react";
import styles from "./page.module.scss";
import Icons from "../Icons";

interface ISearch {
  className?: string;
}

const Search = ({ className }: ISearch) => {
  return (
    <form className={`${styles.search} ${className}`}>
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
