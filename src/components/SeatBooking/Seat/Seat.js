import React from "react";
import styles from "./Seat.module.css";

export default function Seat(props) {
  // console.log(`inside seat.js ${props.occupiedSeats}`);
  let status = "";
  let selectedSeats = props.selectedSeats;

  if (!props.status) {
    if (props.occupiedSeats.includes(props.id)) {
      status = "occupied";
    } else if (selectedSeats.includes(props.id)) {
      status = "selected";
    } else {
      status = "available";
    }
  } else {
    status = props.status;
  }

  return (
    <div
      className={`${styles.seat} ${styles[status]} `}
      id={props.id}
      onClick={props.onClick}
    >
      <div className={`${styles.top} ${styles[props.className]}`}></div>
      <div className={`${styles.bottom} ${styles[props.className]} `}></div>
    </div>
  );
}
