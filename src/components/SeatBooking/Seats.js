import React from "react";
import Card from "../UI/Card";
import styles from "./Seats.module.css";

export default function Seats(props) {
  return (
    <Card>
      <div>
        <div>
          <span>Seats</span>
          <span>Seats</span>
          <span>Seats</span>
        </div>
        <div>
          <span>Seats</span>
          <span>Seats</span>
          <span>Seats</span>
        </div>
        <div>
          <span>Seats</span>
          <span>Seats</span>
          <span>Seats</span>
        </div>
        <div>
          <span>Seats</span>
          <span>Seats</span>
          <span>Seats</span>
        </div>
        <div>
          <span>Seats</span>
          <span>Seats</span>
          <span>Seats</span>
        </div>
        <div>
          <span>Seats</span>
          <span>Seats</span>
          <span>Seats</span>
        </div>
      </div>
      <button className={styles.btn} onClick={props.hideSeatingHandler}>
        Go Back
      </button>
      <button className={styles.btn} onClick={props.onClick}>
        CheckOut
      </button>
    </Card>
  );
}
