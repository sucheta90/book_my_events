import React from "react";
import Card from "../UI/Card";
import styles from "./SeatBooking.module.css";
import Seats from "./Seat/Seat";
import SeatingHeader from "./SeatingHeader";
import Gallery from "./Gallery/Gallery";
import Cart from "./Cart/Cart";

export default function SeatBooking(props) {
  return (
    <Card className={styles.seats}>
      <SeatingHeader price={props.price} />
      <div className={styles.main}>
        <Gallery />
        <Cart />
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
