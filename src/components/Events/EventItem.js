import React from "react";
import Card from "../UI/Card";
import styles from "./EventItem.module.css";

export default function EventItem(props) {
  return (
    <Card className={styles.tile} onClick={props.onClick}>
      <h2 className={`${styles.title} ${styles.pointer_none}`}>
        {props.title}
      </h2>
      <span
        className={styles.pointer_none}
      >{`${props.date} ${props.time}`}</span>
      <p className={styles.pointer_none}>{props.location} </p>
      <p className={styles.pointer_none}>{props.city}</p>
    </Card>
  );
}
