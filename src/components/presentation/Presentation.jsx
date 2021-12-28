import React from "react";
import TabsMain from "../tabs/TabsMain";
import styles from "./Presentation.module.scss";

const Presentation = () => {
  return (
    <>
      <div className={styles.presentation}>
        <div className={styles.presentation__wrapper}>
          <TabsMain />
        </div>
      </div>
    </>
  );
};

export default Presentation;
