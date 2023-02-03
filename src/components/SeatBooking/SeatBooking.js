import React, { useState, useEffect, useCallback } from "react";
import Card from "../UI/Card";
import styles from "./SeatBooking.module.css";
import SeatingHeader from "./SeatingHeader";
import Gallery from "./Gallery/Gallery";
import Cart from "./Cart/Cart";
import Layout from "./Layout/Layout";
import Checkout from "./Checkout/Checkout";
import Confirmation from "./Checkout/Confirmation";
import CheckoutError from "./Checkout/CheckoutError";

export default function SeatBooking(props) {
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [showCheckout, setShowCheckout] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isSeatAvailable, setIsSeatAvailable] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [seatUnavailableMessage, setSeatUnavailableMessage] = useState("");
  const [confirmationInfo, setConfirmationInfo] = useState({ title: "" });

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
        setIsSeatAvailable(false);
        setSeatUnavailableMessage(
          "Can not complete action. Seat unavailable. Please select Seats that are available."
        );
        setShowCheckout("");
        throw new Error(
          "Can not complete action. Seat unavailable. Please select Seats that are available."
        );
      }
    }
    setConfirmationInfo((confirmationInfo.title = data.title));

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
    setSeatUnavailableMessage("");
    fetchData()
      .then(checkResponseToParseData)
      .then(compareSeats)
      .then(patchUpdatedData)
      .then(checkResponseToParseData)
      .then((data) => {
        setIsConfirmed(true);
      })
      .catch((error) => {
        console.log(`something went wrong!! ${error}`);
      });
  }
  // end of fetch function
  function handleCheckout(e) {
    console.log(selectedSeats);
    setShowModal(true);
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
  function closeModal() {
    setShowModal(false);
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
      {showModal && (
        <Layout hideModal={closeModal}>
          {showCheckout === "Checkoutpage" && !isConfirmed && (
            <Checkout
              hideCheckout={handleHideCheckout}
              selectedSeats={selectedSeats}
              handlePayementConfirmation={handlePayementConfirmation}
            />
          )}
          {!isSeatAvailable && (
            <CheckoutError
              error={seatUnavailableMessage}
              hideModal={closeModal}
            />
          )}
          {isConfirmed && (
            <Confirmation
              confirmationInfo={confirmationInfo}
              hideModal={closeModal}
            />
          )}
        </Layout>
      )}
    </Card>
  );
}
