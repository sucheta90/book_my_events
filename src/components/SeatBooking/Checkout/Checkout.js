import React, { useState } from "react";
import styles from "./Checkout.module.css";
import Expiration from "./Expiration";
import useInputValidation from "../../../hooks/input-validation";

export default function Checkout(props) {
  let isNameValid = (value) => value.trim().length >= 2;
  const [isFormValid, setIsFormValid] = useState(false);
  function isCvvValid(value) {
    let cvvRegex = /^\d{3,4}$/g;
    return cvvRegex.test(value);
  }
  function isEmailValid(value) {
    return /^\w+@\w+\.(com|net|in|org|us|info)$/.test(value);
  }
  function isCardValid(value) {
    let myRegex = /^\d{15,16}$/g;
    return myRegex.test(value);
  }

  const {
    inputValue: name,
    handleInputValue: handleChangeName,
    handleIftouched: handleTouched,
    isError,
  } = useInputValidation(isNameValid);

  // Card - state maintenance, validation and error handling.
  const {
    inputValue: card,
    handleInputValue: handleCardInfo,
    handleIftouched: touchedCard,
    isError: cardError,
  } = useInputValidation(isCardValid);

  console.log(`card error ${cardError}`);
  // ***********End of Card validation ***********

  // CVV - state maintenance, validation and error handling.
  const {
    inputValue: cvv,
    handleInputValue: handleCvvInfo,
    handleIftouched: touchedCvv,
    isError: cvvError,
  } = useInputValidation(isCvvValid);

  //***********End of CVV validation ***********

  // Email - state maintenance, validation and error handling.
  const {
    inputValue: email,
    handleInputValue: handleEmailChange,
    handleIftouched: touchedEmail,
    isError: emailError,
  } = useInputValidation(isEmailValid);

  // ***********End of Card validation ***********

  return (
    <div className={styles.Checkout}>
      <div className={styles.checkout__header}>
        <h3>BookMyEvents</h3>
        <button onClick={props.hideCheckout}>X</button>
      </div>

      <form action="" className={styles.form}>
        <div className={styles.entries}>
          <label for="name">Name on Card</label>
          <input
            key="form_name"
            id="name"
            type="text"
            value={name}
            onChange={handleChangeName}
            onBlur={handleTouched}
          />
        </div>
        {isError && (
          <div className={styles.error}>
            Should be at least 2 charaters long{" "}
          </div>
        )}

        <div className={styles.entries}>
          <label for="card">Card Number</label>
          <input
            id="card"
            key="form_card"
            type="text"
            value={card}
            onChange={handleCardInfo}
            onBlur={touchedCard}
          />
        </div>
        {cardError && (
          <div className={styles.error}>
            Invalid card number. Number should be of length 15 or 16 digits long
          </div>
        )}
        <div className={styles.entries}>
          <div className={styles.expiration}>
            <label for="expiration" className={styles.exp}>
              Expiration
            </label>
            <Expiration />
            <div className={styles.cvv}>
              <label>CVV </label>
              <input
                id="cvv"
                key="form_cvv"
                type="number"
                value={cvv}
                onChange={handleCvvInfo}
                onBlur={touchedCvv}
              />
            </div>
          </div>
        </div>
        {cvvError && (
          <div className={styles.error}>
            Please enter valid cvv code. Should have 3 or 4 digits.
          </div>
        )}
        <div className={styles.entries}>
          <label>Email</label>
          <input
            id="email"
            key="form_email"
            type="email"
            value={email}
            onChange={handleEmailChange}
            onBlur={touchedEmail}
          />
        </div>
        {emailError && (
          <div className={styles.error}>
            Invalid email. Please enter a valid email.
          </div>
        )}
        <div>
          <button className={styles.paynow}>Pay now</button>
        </div>
      </form>
    </div>
  );
}
