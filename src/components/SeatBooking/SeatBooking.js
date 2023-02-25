import React, { useState, useContext } from "react";
import Card from "../UI/Card";
import styles from "./SeatBooking.module.css";
import SeatingHeader from "./SeatingHeader";
import Gallery from "./Gallery/Gallery";
import Cart from "./Cart/Cart";
import Layout from "./Layout/Layout";
import Checkout from "./Checkout/Checkout";
import Confirmation from "./Checkout/Confirmation";
import CheckoutError from "./Checkout/CheckoutError";
import { AppReloadContext } from "../../context/appRelaod-context";

export default function SeatBooking(props) {
  const appReload = useContext(AppReloadContext);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [showCheckout, setShowCheckout] = useState("");
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isError, setIsError] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [confirmationInfo, setConfirmationInfo] = useState({ title: "" });
  const [shouldReload, setShouldReload] = useState(false);

  // Will fetch event data from database to compare the occupied seats to current selectedSeats array to avoid duplication.

  const fetchData = () => {
    return fetch(
      `https://eventtickets-44017-default-rtdb.firebaseio.com/events/${props.eventId}.json`
    );
  };
  const checkResponseToParseData = (response) => {
    return new Promise((resolve, reject) => {
      if (!response.ok) {
        reject("Something went wrong!");
      }
      resolve(response.json());
    });
  };
  const compareSeats = (data) => {
    return new Promise((resolve, reject) => {
      let occupiedSeats = data.occupiedSeats; // an array of seat id's
      // console.log(`inside Compare Seats ${occupiedSeats}`);
      for (let i = 0; i < selectedSeats.length; i++) {
        if (occupiedSeats.includes(selectedSeats[i])) {
          reject(
            "Can not complete action. Seat unavailable. Please select Seats that are available."
          );
        } else {
          setConfirmationInfo((confirmationInfo.title = data.title));
          occupiedSeats = [...occupiedSeats, ...selectedSeats];
          // console.log(`updated occupiedSeats: ${occupiedSeats}`);
          resolve(occupiedSeats);
        }
      }
    });
  };
  const patchUpdatedData = (data) => {
    // console.log(`inside patchUpdatedData ${data}`);
    console.log(JSON.stringify({ occupiedSeats: data }));
    return fetch(
      `https://eventtickets-44017-default-rtdb.firebaseio.com/events/${props.eventId}.json`,
      {
        method: "PATCH",
        body: JSON.stringify({ occupiedSeats: data }),
      }
    );
  };
  function handlePaymentConfirmation(e) {
    e.preventDefault();
    setIsConfirmed(false);
    setIsError(false);
    setErrorMessage("");
    setShouldReload(true);
    fetchData()
      .then(checkResponseToParseData)
      .then(compareSeats)
      .then(patchUpdatedData)
      .then(checkResponseToParseData)
      .then((data) => {
        setIsConfirmed(true);
      })
      .catch((error) => {
        setIsError(true);
        // console.log(`${error}`);
        setErrorMessage(error);
      });
  }
  // end of fetch function

  function handleCheckout(e) {
    // console.log(selectedSeats);
    setShowModal(true);
    setShowCheckout("Checkoutpage");
  }
  // function handleHideCheckout(e) {
  //   setShowCheckout("");
  // }
  function handleSeatSelection(e) {
    setSelectedSeats((prevState) => {
      if (prevState.includes(e.target.id)) {
        prevState = prevState.filter((id) => id !== e.target.id);
        return prevState;
      }
      return [...prevState, e.target.id];
    });
  }
  // function closeModal() {
  //   setShowModal(false);
  // }
  function handleReloadApp(e) {
    if (shouldReload) {
      appReload();
      // setShowModal(false);
      setSelectedSeats([]);
      setIsConfirmed(false);
      setIsError(false);
      setConfirmationInfo("");
      setErrorMessage("");
    }
    setShowModal(false);
  }

  let isSelected = selectedSeats.length >= 1;

  return (
    <Card className={styles.seats}>
      <SeatingHeader />
      <Gallery
        selectedSeats={selectedSeats}
        occupiedSeats={props.occupiedSeats}
        handleSeatSelection={handleSeatSelection}
        hideSeatingHandler={props.hideSeatingHandler}
      />
      <Cart
        selectedSeats={selectedSeats}
        handleCheckout={handleCheckout}
        validate={showCheckout}
        isSelected={isSelected}
      />
      {showModal && (
        <Layout hideModal={handleReloadApp}>
          {showCheckout === "Checkoutpage" && !isConfirmed && (
            <Checkout
              hideCheckout={handleReloadApp}
              selectedSeats={selectedSeats}
              handlePaymentConfirmation={handlePaymentConfirmation}
            />
          )}
          {isError && (
            <CheckoutError
              error={errorMessage}
              onBlur={handleReloadApp}
              handleAppReload={handleReloadApp}
            />
          )}
          {isConfirmed && (
            <Confirmation
              confirmationInfo={confirmationInfo}
              onBlur={handleReloadApp}
              handleAppReload={handleReloadApp}
            />
          )}
        </Layout>
      )}
    </Card>
  );
}
