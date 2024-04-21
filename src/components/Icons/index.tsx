import React from "react";
import Instagram from "./Instagram";
import Facebook from "./Facebook";

import styles from "./page.module.scss";
import Search from "./Search";
import Favorite from "./Favorite";
import Basket from "./Basket";

interface IIcons {
  iconName: string;
}

const Icons = ({ iconName }: IIcons) => {
  let icon;

  switch (iconName) {
    case "instagram":
      icon = <Instagram />;
      break;
    case "facebook":
      icon = <Facebook />;
      break;
    case "search":
      icon = <Search />;
      break;
    case "favorite":
      icon = <Favorite />;
      break;
    case "basket":
      icon = <Basket />;
      break;
    default:
      icon = <div>Иконка не найдена</div>;
  }

  return <div className={styles.icon}>{icon}</div>;
};

export default Icons;
