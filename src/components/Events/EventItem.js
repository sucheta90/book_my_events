import React from "react";
import Card from "../UI/Card";
import styles from "./EventItem.module.css";

export default function EventItem(props) {
  return (
    <Card>
      <h2 className={styles.title}>{props.title}</h2>
      <span>{`${props.date} ${props.time}`}</span>
      <p>{props.location} </p>
      <p>{props.city}</p>
    </Card>
  );
}
