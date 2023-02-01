import React, { useState, useEffect, useCallback } from "react";
import Card from "../UI/Card";
import styles from "./SeatBooking.module.css";
import SeatingHeader from "./SeatingHeader";
import Gallery from "./Gallery/Gallery";
import Cart from "./Cart/Cart";
import Layout from "./Layout/Layout";
import Checkout from "./Checkout/Checkout";
import Confirmation from "./Checkout/Confirmation";

export default function SeatBooking(props) {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [showCheckout, setShowCheckout] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);

  // Will fetch event data from database to compare the occupied seats to current selectedSeats array to avaoid duplication.

  const fetchData = () => {
    return fetch(
      `https://bookmyevents-2ad9f-default-rtdb.firebaseio.com/events/${props.eventId}.json`
    );
  };
  const checkResponseToParseData = (response) => {
    if (!response.ok) {
      throw new Error("Something went wrong!");
    }
    return response.json();
  };
  const compareSeats = (data) => {
    console.log(`inside data after compareSeats Data: ${data}`);
    let occupiedSeats = data.occupiedSeats;

    for (let i = 0; i < selectedSeats.length; i++) {
      if (occupiedSeats.includes(selectedSeats[i])) {
        console.log("can not coomplete action seat unavailable");
        return;
      }
    }
    occupiedSeats = [...occupiedSeats, ...selectedSeats];
    console.log(`updated occupiedSeats: ${occupiedSeats}`);
    return occupiedSeats;
  };
  const patchUpdatedData = (data) => {
    return fetch(
      `https://bookmyevents-2ad9f-default-rtdb.firebaseio.com/events/${props.eventId}.json`,
      {
        method: "PATCH",
        body: JSON.stringify({ occupiedSeats: data }),
      }
    );
  };
  function handlePayementConfirmation(e) {
    e.preventDefault();
    setIsConfirmed(false);
    console.log("Clicked pay now");
    fetchData()
      .then(checkResponseToParseData)
      .then(compareSeats)
      .then(patchUpdatedData)
      .then(checkResponseToParseData)
      .then((data) => {
        setIsConfirmed(true);
      })
      .catch((error) => {
        console.log(`Something went wrong!!! ${error}`);
      });
  }
  // end of fetch function

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
          {!isConfirmed && (
            <Checkout
              hideCheckout={handleHideCheckout}
              selectedSeats={selectedSeats}
              handlePayementConfirmation={handlePayementConfirmation}
            />
          )}
          {isConfirmed && <Confirmation />}
        </Layout>
      )}
    </Card>
  );
}
