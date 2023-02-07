import React, { useState } from "react";
import styles from "./Checkout.module.css";
import Expiration from "./Expiration";
import useInputValidation from "../../../hooks/input-validation";

export default function Checkout(props) {
  const [isFormValid, setIsFromValid] = useState(false);
  let isNameValid = (value) =>
    value.trim().length >= 2 && /^[A-Za-z\s]*$/.test(value);
  // function isCvvValid(value) {
  //   let cvvRegex = /^\d{3,4}$/g;
  //   return cvvRegex.test(value);
  // }
  function isEmailValid(value) {
    return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      value
    );
  }
  function isCardValid(value) {
    let myRegex = /^\d{15,16}$/g;
    return myRegex.test(value);
  }
  function formValidation(e) {
    if (checkingIfNameValid && checkingIfCardValid && checkingIfEmailValid) {
      setIsFromValid(true);
    }
  }

  const {
    inputValue: name,
    handleInputValue: handleChangeName,
    handleIftouched: handleTouched,
    isError,
    isValid: checkingIfNameValid,
  } = useInputValidation(isNameValid);

  // Card - state maintenance, validation and error handling.
  const {
    inputValue: card,
    handleInputValue: handleCardInfo,
    handleIftouched: touchedCard,
    isError: cardError,
    isValid: checkingIfCardValid,
  } = useInputValidation(isCardValid);

  // console.log(`card error ${cardError}`);
  // ***********End of Card validation ***********

  // Email - state maintenance, validation and error handling.
  const {
    inputValue: email,
    handleInputValue: handleEmailChange,
    handleIftouched: touchedEmail,
    isError: emailError,
    isValid: checkingIfEmailValid,
  } = useInputValidation(isEmailValid);

  // ***********End of Card validation ***********

  return (
    <div className={styles.Checkout}>
      <div className={styles.checkout__header}>
        <h3>BookMyEvents</h3>
        <button onClick={props.hideCheckout}>X</button>
      </div>

      <form action="" className={styles.form} onChange={formValidation}>
        <div className={styles.entries}>
          <label htmlFor="name">Name on Card</label>
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
            Should be at least 2 charaters long and should contain alphabets
            only
          </div>
        )}

        <div className={styles.entries}>
          <label htmlFor="card">Card Number</label>
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
            <label htmlFor="expiration" className={styles.exp}>
              Expiration
            </label>
            <Expiration id="expiration" />
            {/* <div className={styles.cvv}>
              <label htmlFor="cvv">CVV </label>
              <input
                id="cvv"
                key="form_cvv"
                type="text"
                value={cvv}
                onChange={handleCvvInfo}
                onBlur={touchedCvv}
              />
            </div> */}
          </div>
        </div>
        {/* {cvvError && (
          <div className={styles.error}>
            Please enter valid cvv code. Should have 3 or 4 digits.
          </div>
        )} */}
        <div className={styles.entries}>
          <label htmlFor="email">Email</label>
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
          <button
            className={isFormValid ? styles.paynow_active : styles.paynow}
            onClick={props.handlePayementConfirmation}
          >
            Pay now
          </button>
        </div>
      </form>
    </div>
  );
}
