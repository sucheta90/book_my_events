import React from "react";
import styles from "./Header.module.css";

export default function Header() {
  // console.log(styles);
  return (
    <div className={styles.Header}>
      <h2> BookMyEvents </h2>
    </div>
  );
}
