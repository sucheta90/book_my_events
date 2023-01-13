import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./SeatBooking.module.css";
// import Seats from "./Seat/Seat";
import SeatingHeader from "./SeatingHeader";
import Gallery from "./Gallery/Gallery";
import Cart from "./Cart/Cart";

export default function SeatBooking(props) {
  const [selectedSeats, setSelectedSeats] = useState([]);
  function handleSeatSelection(e) {
    setSelectedSeats((prevState) => {
      if (prevState.includes(e.target.id)) {
        prevState = prevState.filter((id) => id !== e.target.id);
        return prevState;
      }
      return [...prevState, e.target.id];
    });
  }
  return (
    <Card className={styles.seats}>
      <SeatingHeader price={props.price} />
      <Gallery
        selectedSeats={selectedSeats}
        occupiedSeats={props.occupiedSeats}
        handleSeatSelection={handleSeatSelection}
        hideSeatingHandler={props.hideSeatingHandler}
      />
      <Cart price={props.price} selectedSeats={selectedSeats} />
    </Card>
  );
}
