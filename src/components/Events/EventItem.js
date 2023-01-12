import React from "react";
import Card from "../UI/Card";
import styles from "./EventItem.module.css";
import EventDate from "./EventDate";
export default function EventItem(props) {
  const day = props.date.toLocaleString("en-US", { weekday: "short" });
  return (
    <Card className={`${styles.tile}`} id={props.id}>
      <EventDate date={props.date} className={styles.pointer_none} />
      <div className={`${styles.pointer_none} ${styles.mainInfo}`}>
        <h2 className={`${styles.title} ${styles.pointer_none}`}>
          {props.title}
        </h2>
        <span className={styles.pointer_none}>{` ${day} ${props.time}`}</span>
        {/* <p className={styles.pointer_none}>{props.location} </p> */}
        <p className={styles.pointer_none}>{`${props.city} ${props.state}`}</p>
      </div>
      {props.toShow === "" && (
        <button
          id={`info_btn_${props.id}`}
          onClick={props.onClick}
          className={styles.info_btn}
        >
          More Info
        </button>
      )}
      {props.toShow && <div></div>}
    </Card>
  );
}
