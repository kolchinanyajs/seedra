import React from "react";
import Instagram from "./Instagram";
import Facebook from "./Facebook";

import styles from "./page.module.scss";
import Search from "./Search";

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
    default:
      icon = <div>Иконка не найдена</div>;
  }

  return <div className={styles.icon}>{icon}</div>;
};

export default Icons;
