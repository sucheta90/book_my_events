import React from "react";
import Card from "../UI/Card";
import styles from "./EventDetails.module.css";

export default function EventDetails(props) {
  return (
    <Card className={styles.details}>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      {/* <h2>{props.title}</h2>
      <img src={props.image} />
      <p>
        {props.date} {props.time}
      </p>
      <p>{props.location}</p>
      <p>{props.city}</p> */}
      <button onClick={props.hideDetailHandler}>Go Back</button>
      <button id="bookNow-btn" onClick={props.bookNowHandler}>
        Book now
      </button>
    </Card>
  );
}
