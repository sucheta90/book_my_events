import React from "react";
import Card from "../UI/Card";
import styles from "./SeatBooking.module.css";
import Seats from "./Seats/Seats";
import SeatingHeader from "./SeatingHeader";

export default function SeatBooking(props) {
  return (
    <Card className={styles.seats}>
      <SeatingHeader />
      <div>
        <div>
          <Seats />
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
