import React from "react";
import Card from "../UI/Card";
import styles from "./EventDetails.module.css";

export default function EventDetails(props) {
  return (
    <Card className={styles.details}>
      <div className={styles.event_image}>
        <img src={props.event.image} className={styles.image} alt="" />
      </div>
      <div className={styles.event_description}>
        <a
          href={props.event.direction}
          target="_blank"
          rel="noreferrer"
          className={styles.link}
        >
          <h4>{`${props.event.location} - ${props.event.city}, ${props.event.state}`}</h4>
        </a>
        <p className={styles.event_intro}>{props.event.description}</p>
        <div className={styles.buttons}>
          <button onClick={props.hideDetailHandler}>Hide Info</button>
          <button id="bookNow-btn" onClick={props.bookNowHandler}>
            Book now
          </button>
        </div>
      </div>
    </Card>
  );
}
