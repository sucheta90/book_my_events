import React from "react";
import Card from "../UI/Card";
import styles from "./EventDetails.module.css";

export default function EventDetails(props) {
  return (
    <Card className={styles.details}>
      <img src={props.event.image} className={styles.image} />
      <div className={styles.main}>
        <a href={props.event.direction} target="_blank" rel="noreferrer">
          <p>{`${props.event.location} - ${props.event.city}, ${props.event.state}`}</p>
        </a>
        <p>{props.event.description}</p>
        <div>
          <button onClick={props.hideDetailHandler}>Go Back</button>
          <button id="bookNow-btn" onClick={props.bookNowHandler}>
            Book now
          </button>
        </div>
      </div>
    </Card>
  );
}
