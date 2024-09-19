import React from "react";
import Instagram from "./Instagram";
import Facebook from "./Facebook";
import styles from "./page.module.scss";
import Search from "./Search";
import Basket from "./Basket";
import All from "./All";
import Menu from "./Menu";
import Arrow from "./Arrow";

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
    case "basket":
      icon = <Basket />;
      break;
    case "all":
      icon = <All />;
      break;
    case "menu":
      icon = <Menu />;
      break;
    case "arrow":
      icon = <Arrow />;
      break;
    default:
      icon = <i>Иконка не найдена</i>;
  }

  return <i className={styles.icon}>{icon}</i>;
};

export default Icons;
