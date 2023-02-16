import React from "react";
import styles from "./Header.module.css";

export default function Header(props) {
  // console.log(styles);
  return (
    <div className={styles.Header}>
      <div className={styles.header_container}>
        <input
          type="text"
          className={styles.search}
          onChange={props.handleSearchInput}
          placeholder="Artist, City, Venue, State, &#x1F50D;"
        />
        <h2> BookMyEvents </h2>
      </div>
    </div>
  );
}
