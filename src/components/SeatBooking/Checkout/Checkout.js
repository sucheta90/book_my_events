import React, { useState } from "react";
import styles from "./Checkout.module.css";
import Expiration from "./Expiration";

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

  return (
    <div className={styles.Checkout}>
      <div className={styles.checkout__header}>
        <h3>BookMyEvents</h3>
        <button onClick={props.hideCheckout}>X</button>
      </div>

      <form action="" className={styles.form}>
        <table>
          <tbody>
            <tr>
              <td>Name on Card</td>
              <td>
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
              </td>
            </tr>
            <tr>
              <td>Card Number</td>
              <td>
                <input
                  type="text"
                  value={card}
                  onChange={handleCardInfo}
                  onBlur={touchedCard}
                />
                {cardError && (
                  <div className={styles.error}>
                    Invalid card number. Number should be of length 15 or 16
                    digits long
                  </div>
                )}
              </td>
            </tr>
            <tr>
              <td>Expiration</td>
              <td>
                <Expiration />
              </td>
            </tr>
            <tr>
              <td>CVV</td>
              <td>
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
              </td>
            </tr>
            <tr>
              <td>Email</td>
              <td>
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
              </td>
            </tr>
          </tbody>
        </table>
        <button className={styles.paynow}>Pay now</button>
      </form>
    </div>
  );
}
