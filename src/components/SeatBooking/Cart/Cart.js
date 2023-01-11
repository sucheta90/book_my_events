import React from "react";
import styles from "./Cart.module.css";
import Seat from "../Seat/Seat";

export default function Cart(props) {
  let price = props.price;
  let selectedSeats = props.selectedSeats;
  let qty_red = 0;
  let qty_green = 0;
  let qty_blue = 0;
  let amount = 0;
  for (let id of selectedSeats) {
    let keyWord = id.split("_");
    if (keyWord[2] === "Red") {
      qty_red++;
    } else if (keyWord[2] === "Green") {
      qty_green++;
    } else if (keyWord[2] === "Blue") {
      qty_blue++;
    }
  }
  return (
    <div className={styles.Cart}>
      <table>
        <tbody>
          <tr>
            <th>Items</th>
            <th>Qty</th>
            <th>Amt</th>
          </tr>
          <tr>
            <th>
              <Seat className="red" status="available" />
            </th>
            <td>{qty_red}</td>
            <td>{` ${qty_red * price.red}`}</td>
          </tr>
          <tr>
            <th>
              <Seat className="green" status="available" />
            </th>
            <td>{qty_green}</td>
            <td>{` ${qty_green * price.green}`}</td>
          </tr>
          <tr>
            <th>
              <Seat className="blue" status="available" />
            </th>
            <td>{qty_blue}</td>
            <td>{` ${qty_blue * price.blue}`}</td>
          </tr>
          <tr>
            <th>Total</th>
            <td>{`$`}</td>
            <td>{`${
              qty_red * price.red +
              qty_green * price.green +
              qty_red * price.blue
            }`}</td>
            <td>
              <button className={styles.btn}>CheckOut</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
