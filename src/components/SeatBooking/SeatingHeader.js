import React from "react";
import styles from "./SeatingHeader.module.css";
import Card from "../UI/Card";
import Seat from "./Seat/Seat";

export default function SeatingHeader(props) {
  // console.log(`insde seatHeader ${JSON.stringify(props.price)}`);
  return (
    <Card className={styles.header}>
      <div className={styles.pricing}>
        <span>
          <Seat status="available" className="red" />$ {props.price.red}
        </span>
        <span>
          <Seat status="available" className="green" /> ${props.price.green}
        </span>
        <span>
          <Seat status="available" className="blue" /> ${props.price.blue}
        </span>
      </div>
      <div className={styles.seat_status}>
        <span>
          <Seat status="available" className="green" /> Available
        </span>
        <span>
          <Seat status="selected" className="green" /> Selected
        </span>
        <span>
          <Seat status="occupied" className="green" />
          Occupied
        </span>
      </div>
    </Card>
  );
}
