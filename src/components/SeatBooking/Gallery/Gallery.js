import React from "react";
import styles from "./Gallery.module.css";
import Stage from "./Stage/Stage";
import Bay from "./Bay/Bay";

export default function Gallery() {
  return (
    <div className={styles.Gallery}>
      <h4>Gallery</h4>
      <Stage />
      <div className={styles.all_bays}>
        <Bay id="Bay_1" />
        <Bay id="Bay_2" />
        <Bay id="Bay_3" />
      </div>
    </div>
  );
}
