import React, { useState } from "react";
import styles from "./Checkout.module.css";

export default function Checkout(props) {
  // Name field validation and error message handling:
  const [name, setName] = useState("");
  const [nameTouched, setNameTouched] = useState(false);

  // This functions is called onChage for Name.
  function handleChangeName(e) {
    setName(e.target.value);
    setNameTouched(true);
  }
  // Handler function callled onBlur event.
  function handleTouched(e) {
    setNameTouched(true);
  }

  let isError = name.trim().length <= 2 && nameTouched;
  // ***********End of name validation ***********

  // Card - state maintenance, validation and error handling.
  const [card, setCard] = useState(""); // state defined for Card number.
  const [cardTouched, setCardTouched] = useState(false);
  let myRegex = /^\d{15,16}$/g;

  let cardError = myRegex.test(card) === false && cardTouched;
  function handleCardInfo(e) {
    setCard(e.target.value);
    setCardTouched(true);
  }
  function touchedCard(e) {
    setCardTouched(true);
  }
  // ***********End of Card validation ***********

  // CVV - state maintenance, validation and error handling.
  const [cvv, setCvv] = useState(""); // state defined for card CVV.
  const [cvvTouched, setCvvTouched] = useState(false);
  let cvvRegex = /^\d{3,4}$/g;

  let cvvError = cvvRegex.test(cvv) === false && cvvTouched;
  function handleCvvInfo(e) {
    setCvv(e.target.value);
    setCvvTouched(true);
  }
  function touchedCvv(e) {
    setCvvTouched(true);
  }

  //***********End of CVV validation ***********

  // Email - state maintenance, validation and error handling.
  const [email, setEmail] = useState("");
  const [emailIsTouched, setEmailIsTouched] = useState(false);
  let emailError =
    /^\w+@\w+\.(com|net|in|org|us|info)$/.test(email) === false &&
    emailIsTouched;
  function handleEmailChange(e) {
    setEmail(e.target.value);
    setEmailIsTouched(true);
  }
  function touchedEmail(e) {
    setEmailIsTouched(true);
  }
  // ***********End of Card validation ***********
  // Expiration Year- validation

  //Function create New Date , <select>/ <option> for Years to show dynamically.
  let currentYear = new Date().getFullYear();
  let arrayOfYears = [];
  for (let i = 0; i < 12; i++) {
    arrayOfYears.push(<option>{currentYear + i}</option>);
  }

  // Function create <select>/ <option> for Months to show dynamically.

  return (
    <div className={styles.Checkout}>
      <h3>BookMyEvents</h3>
      <form action="" className={styles.form}>
        <label>
          Name on Card
          <input
            type="text"
            value={name}
            onChange={handleChangeName}
            onBlur={handleTouched}
          />
          {isError && (
            <div className={styles.error}>
              Should be at least 2 charaters long{" "}
            </div>
          )}
        </label>
        <label>
          Card Number
          <input
            type="text"
            value={card}
            onChange={handleCardInfo}
            onBlur={touchedCard}
          />
          {cardError && (
            <div className={styles.error}>
              Invalid card number. Number should be of length 15 or 16 digits
              long
            </div>
          )}
        </label>
        <label>
          Expiration
          <select className={styles.month}></select>
          {/* <input type="number" placeholder="Year" /> */}
          <select className={styles.year}>{arrayOfYears}</select>
        </label>
        <label>
          CVV
          <input
            type="number"
            value={cvv}
            onChange={handleCvvInfo}
            onBlur={touchedCvv}
          />
          {cvvError && (
            <div className={styles.error}>
              Please enter valid cvv code. Should have 3 or 4 digits.
            </div>
          )}
        </label>
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            onBlur={touchedEmail}
          />
          {emailError && (
            <div className={styles.error}>
              Invalid email. Please enter a valid email.
            </div>
          )}
        </label>
      </form>
    </div>
  );
}
