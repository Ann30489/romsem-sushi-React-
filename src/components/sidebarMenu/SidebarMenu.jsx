import React from "react";
import Logo from "../logo/Logo";
import Menu from "../menu/Menu";
import styles from "./SidebarMenu.module.scss";

const SidebarMenu = () => {
  return (
    <div className={styles.sidebarMenu}>
      <div className={styles.sidebarMenu__wrapper}>
        <div className={styles.sidebarMenu__container}>
          <Logo />
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default SidebarMenu;
