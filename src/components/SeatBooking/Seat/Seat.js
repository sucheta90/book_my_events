import React from "react";
import styles from "./Seat.module.css";

export default function Seat(props) {
  console.log(props.className);
  return (
    <div className={`${styles.seat}`} id={props.id}>
      <div
        className={`${styles.top} ${styles[props.className]} ${
          styles[props.status]
        }`}
      ></div>
      <div
        className={`${styles.bottom} ${styles[props.status]} ${
          styles[props.className]
        }`}
      ></div>
    </div>
  );
}
