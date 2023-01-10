import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./SeatBooking.module.css";
// import Seats from "./Seat/Seat";
import SeatingHeader from "./SeatingHeader";
import Gallery from "./Gallery/Gallery";
import Cart from "./Cart/Cart";

export default function SeatBooking(props) {
  // console.log(`inside SeatBooking ${JSON.stringify(props)}`);
  const [selectedSeats, setSelectedSeats] = useState([]);
  function handleSeatSelection(e) {
    setSelectedSeats((prevState) => {
      if (prevState.includes(e.target.id)) {
        prevState = prevState.filter((id) => id != e.target.id);
        return prevState;
      }
      return [...prevState, e.target.id];
    });
  }
  return (
    <Card className={styles.seats}>
      <SeatingHeader price={props.price} />
      <div className={styles.main}>
        {
          <Gallery
            selectedSeats={selectedSeats}
            occupiedSeats={props.occupiedSeats}
            handleSeatSelection={handleSeatSelection}
          />
        }
        <Cart price={props.price} selectedSeats={selectedSeats} />
      </div>

      <button className={styles.btn} onClick={props.hideSeatingHandler}>
        Go Back
      </button>
      <button className={styles.btn}>CheckOut</button>
    </Card>
  );
}
