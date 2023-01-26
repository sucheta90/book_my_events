import React, { useState } from "react";
import styles from "./Expiration.module.css";

export default function Expiration(props) {
  //Function create New Date , <select>/ <option> for Years to show dynamically.
  let currentYear = new Date().getFullYear();
  let arrayOfYears = [<option key="blank_year"></option>];
  for (let i = 0; i < 12; i++) {
    arrayOfYears.push(<option key={i}>{currentYear + i}</option>);
  }
  const [year, setYear] = useState("Year");
  function handleSelectYear(e) {
    setYear(e.target.value);
    console.log(`From inside select Year ${year}`);
  }

  // Function create <select>/ <option> for Months to show dynamically.
  let monthsOfYear = [<option key="blank_month"></option>];
  if (year === currentYear) {
    let month = new Date().getMonth() + 1;
    for (let i = month; i <= 12; i++) {
      monthsOfYear.push(<option key={`${month}`}>{i}</option>);
    }
  } else {
    for (let i = 0; i < 12; i++) {
      monthsOfYear.push(<option key={`${i}month`}>{i + 1}</option>);
    }
  }

  return (
    <div className={styles.expiration}>
      <span>
        Month
        <select className={styles.month}>{monthsOfYear}</select>
      </span>
      <span>
        Year
        <select className={styles.year} onChange={handleSelectYear}>
          {arrayOfYears}
        </select>
      </span>
    </div>
  );
}
