import React from "react";
import styles from "./Header.module.css";

export default function Header() {
  // console.log(styles);
  return (
    <div className={styles.Header}>
      <h2>Book My Events</h2>
    </div>
  );
}
