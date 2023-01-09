import React from "react";
import styles from "./Bay.module.css";
import Column from "./Column";

export default function Bay(props) {
  let row = [];
  for (let i = 0; i < 9; i++) {
    if (i <= 2) {
      row.push(<Column id={`${props.id}_LBR_${i + 1}`} className="red" />);
    } else if (i > 2 && i <= 5) {
      row.push(<Column id={`${props.id}_LBR_${i + 1}`} className="green" />);
    } else if (i > 5 && i <= 8) {
      row.push(<Column id={`${props.id}_LBR_${i + 1}`} className="blue" />);
    }
  }

  return (
    <div id={props.id} className={`${styles.bay} ${props.className}`}>
      {row}
    </div>
  );
}
