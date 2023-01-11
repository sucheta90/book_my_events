import React from "react";
import styles from "./Stage.module.css";

export default function Stage() {
  return (
    <div className={styles.stage}>
      <div className={styles.one}></div>
      <div className={styles.two}></div>
      <div className={styles.three}></div>
      <h3>STAGE AREA</h3>
    </div>
  );
}
