import React, { useContext } from "react";
import { PriceContext } from "../../context/price-context";
import styles from "./SeatingHeader.module.css";
import Card from "../UI/Card";
import Seat from "./Seat/Seat";

export default function SeatingHeader(props) {
  let price = useContext(PriceContext);
  // console.log(`insde seatHeader ${JSON.stringify(props.price)}`);
  return (
    <Card className={styles.header}>
      <div className={styles.pricing}>
        <span>
          <Seat status="available" className="red" />$ {price.red}
        </span>
        <span>
          <Seat status="available" className="green" /> ${price.green}
        </span>
        <span>
          <Seat status="available" className="blue" /> ${price.blue}
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
