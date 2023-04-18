import React from "react";
import styles from "./Stage.module.css";

export default function Stage() {
  return (
    <div className={styles.stage} data-testid="stage-component">
      <h3>STAGE AREA</h3>
    </div>
  );
}
