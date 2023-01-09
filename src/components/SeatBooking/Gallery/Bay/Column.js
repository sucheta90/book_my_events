import React from "react";
import styles from "./Column.module.css";
import Seats from "../../Seat/Seat";

export default function Column(props) {
  let col = [];
  for (let i = 0; i < 6; i++) {
    col.push(
      <Seats className={props.className} id={`${props.id}C_${i + 1}`} />
    );
  }

  return <div className={styles.column}>{col}</div>;
}
