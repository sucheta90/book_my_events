import React from "react";
import styles from "./Card.module.css";

export default function Card(props) {
  if (props.onClick) {
    return (
      <div
        className={`${styles.card} ${props.className}`}
        onClick={props.onClick}
      >
        {props.children}
      </div>
    );
  }
  return (
    <div className={`${styles.card} ${props.className}`}>{props.children}</div>
  );
}
