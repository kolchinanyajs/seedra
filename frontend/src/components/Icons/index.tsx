import React from "react";
import Instagram from "./Instagram";
import Facebook from "./Facebook";
import styles from "./page.module.scss";
import Search from "./Search";
import Basket from "./Basket";
import All from "./All";
import Menu from "./Menu";
import Arrow from "./Arrow";
import RangeLine from "./RangeLine";
import Filter from "./Filter";
import Available from "./Available";
import Tomato from "./Tomato";
import Minus from "./Minus";
import Plus from "./Plus";

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
    case "range-line":
      icon = <RangeLine />;
      break;
    case "filter":
      icon = <Filter />;
      break;
    case "available":
      icon = <Available />;
      break;
    case "tomato":
      icon = <Tomato />;
      break;
    case "minus":
      icon = <Minus />;
      break;
    case "plus":
      icon = <Plus />;
      break;
    default:
      icon = <i>Иконка не найдена</i>;
  }

  return <i className={styles.icon}>{icon}</i>;
};

export default Icons;
