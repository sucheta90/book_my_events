import React, { useState } from "react";
import Card from "../UI/Card";
import styles from "./SeatBooking.module.css";
// import Seats from "./Seat/Seat";
import SeatingHeader from "./SeatingHeader";
import Gallery from "./Gallery/Gallery";
import Cart from "./Cart/Cart";
import Layout from "./Layout/Layout";
import Checkout from "./Checkout/Checkout";

export default function SeatBooking(props) {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [showCheckout, setShowCheckout] = useState("");

  function handleCheckout(e) {
    console.log(selectedSeats);
    setShowCheckout("Checkoutpage");
  }
  function handleHideCheckout(e) {
    setShowCheckout("");
  }
  function handleSeatSelection(e) {
    setSelectedSeats((prevState) => {
      if (prevState.includes(e.target.id)) {
        prevState = prevState.filter((id) => id !== e.target.id);
        return prevState;
      }
      return [...prevState, e.target.id];
    });
  }
  let isSelected = selectedSeats.length >= 1;
  return (
    <Card className={styles.seats}>
      <SeatingHeader price={props.price} />
      <Gallery
        selectedSeats={selectedSeats}
        occupiedSeats={props.occupiedSeats}
        handleSeatSelection={handleSeatSelection}
        hideSeatingHandler={props.hideSeatingHandler}
      />
      <Cart
        price={props.price}
        selectedSeats={selectedSeats}
        handleCheckout={handleCheckout}
        validate={showCheckout}
        isSelected={isSelected}
      />
      {showCheckout === "Checkoutpage" && (
        <Layout handleHideCheckout={handleHideCheckout}>
          <Checkout hideCheckout={handleHideCheckout} />
        </Layout>
      )}
    </Card>
  );
}
