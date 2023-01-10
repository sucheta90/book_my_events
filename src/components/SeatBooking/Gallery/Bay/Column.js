import React from "react";
import styles from "./Column.module.css";
import Seat from "../../Seat/Seat";

export default function Column(props) {
  let col = [];
  for (let i = 0; i < 6; i++) {
    col.push(
      <Seat
        className={props.className}
        id={`${props.id}C_${i + 1}`}
        key={`${props.id}C_${i + 1}`}
        selectedSeats={props.selectedSeats}
        occupiedSeats={props.occupiedSeats}
        onClick={props.onClick}
      />
    );
  }

  return <div className={styles.column}>{col}</div>;
}
