import React, { useState } from "react";
import styles from "./Checkout.module.css";

export default function Checkout(props) {
  const [name, setName] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  const [card, setCard] = useState("");

  // This functions is called onChage for Name.
  function handleChangeName(e) {
    setName(e.target.value);
    setIsTouched(true);
  }
  function handleTouched(e) {
    setIsTouched(true);
  }

  let isError = name.trim().length <= 2 && isTouched;
  console.log(name.trim().length > 2 && isTouched);

  function handleCardInfo(e) {
    setCard(e.target.value);
  }

  return (
    <div className={styles.Checkout}>
      <form action="" className={styles.form}>
        <label>
          Name on Card
          <input
            type="text"
            value={name}
            onChange={handleChangeName}
            onBlur={handleTouched}
          />
          {isError && <div>Should be at least 2 charaters long </div>}
        </label>
        <label>
          Card
          <input type="text" value={card} />
        </label>
        <label>
          Expiration
          <input placeholder="Month" type="number" />
          <input placeholder="Year" type="number" />
        </label>
        <label>
          CVV
          <input type="number" />
        </label>
        <label>
          Email
          <input type="email" />
        </label>
      </form>
    </div>
  );
}
