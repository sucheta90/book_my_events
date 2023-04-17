import React from "react";
import styles from "./Bay.module.css";
import Column from "./Column";

export default function Bay(props) {
  let row = [];
  for (let i = 0; i < 9; i++) {
    if (i <= 2) {
      row.push(
        <Column
          id={`${props.id}_Red_R_${i + 1}`}
          key={`${props.id}_Red_R_${i + 1}`}
          className="red"
          occupiedSeats={props.occupiedSeats}
          selectedSeats={props.selectedSeats}
          onClick={props.onClick}
          data-testid="column"
        />
      );
    } else if (i > 2 && i <= 5) {
      row.push(
        <Column
          id={`${props.id}_Green_R_${i + 1}`}
          key={`${props.id}_Green_R_${i + 1}`}
          className="green"
          occupiedSeats={props.occupiedSeats}
          selectedSeats={props.selectedSeats}
          onClick={props.onClick}
          data-testid="column"
        />
      );
    } else if (i > 5 && i <= 8) {
      row.push(
        <Column
          id={`${props.id}_Blue_R_${i + 1}`}
          key={`${props.id}_Blue_R_${i + 1}`}
          className="blue"
          occupiedSeats={props.occupiedSeats}
          selectedSeats={props.selectedSeats}
          onClick={props.onClick}
          data-testid="column"
        />
      );
    }
  }

  return (
    <div id={props.id} className={`${styles.bay}`}>
      {row}
    </div>
  );
}
