import React from "react";
import styles from "./Gallery.module.css";
import Stage from "./Stage/Stage";
import Bay from "./Bay/Bay";

export default function Gallery(props) {
  return (
    <div className={styles.Gallery}>
      <button className={styles.btn} onClick={props.hideSeatingHandler}>
        &larr;
      </button>
      <Stage />
      <div className={styles.all_bays}>
        <Bay
          id="Bay_1"
          selectedSeats={props.selectedSeats}
          occupiedSeats={props.occupiedSeats}
          onClick={props.handleSeatSelection}
        />
        <Bay
          id="Bay_2"
          selectedSeats={props.selectedSeats}
          occupiedSeats={props.occupiedSeats}
          onClick={props.handleSeatSelection}
        />
        <Bay
          id="Bay_3"
          selectedSeats={props.selectedSeats}
          occupiedSeats={props.occupiedSeats}
          onClick={props.handleSeatSelection}
        />
      </div>
      <div className={styles.message}>
        {props.errorMessage
          ? `${props.errorMessage}`
          : "Select Seats to proceed"}
      </div>
    </div>
  );
}
