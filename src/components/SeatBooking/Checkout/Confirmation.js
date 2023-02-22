import React from "react";
import styles from "./Confirmation.module.css";

export default function Confirmation(props) {
  console.log(`inside confirmation ${props.confirmationInfo}`);
  return (
    <div className={styles.confirmation} onBlur={props.onBlur}>
      <h2 className={styles.confirmation_header}>
        Your Booking for the {props.confirmationInfo} -event was successful.
      </h2>
      <button
        className={styles.confirmation_btn_home}
        onClick={props.handleAppReload}
      >
        Close
      </button>
    </div>
  );
}
