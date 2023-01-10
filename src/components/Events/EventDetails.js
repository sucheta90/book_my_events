import React from "react";
import Card from "../UI/Card";
import styles from "./EventDetails.module.css";

export default function EventDetails(props) {
  return (
    <Card className={styles.details}>
      <img src={props.event.image} className={styles.image} />

      <a
        href={props.event.direction}
        target="_blank"
        rel="noreferrer"
        className={styles.link}
      >
        <h4>{`${props.event.location} - ${props.event.city}, ${props.event.state}`}</h4>
      </a>
      <p className={styles.description}>{props.event.description}</p>
      <div className={styles.button}>
        <button onClick={props.hideDetailHandler}>Go Back</button>
        <button id="bookNow-btn" onClick={props.bookNowHandler}>
          Book now
        </button>
      </div>
    </Card>
  );
}
