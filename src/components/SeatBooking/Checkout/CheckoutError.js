import React from "react";
import styles from "./CheckoutError.module.css";

export default function CheckoutError(props) {
  return (
    <div className={styles.error}>
      <h2 className={styles.error_header}>{props.error}</h2>
      <button className={styles.error_btn} onClick={props.hideModal}>
        Back
      </button>
    </div>
  );
}
