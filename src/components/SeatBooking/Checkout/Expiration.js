import React, { useState } from "react";
import styles from "./Expiration.module.css";
import useInputValidation from "../../../hooks/input-validation";

export default function Expiration(props) {
  const [year, setYear] = useState("");
  const [isYearSelected, setIsYearSelected] = useState(false);
  const [isMonthSelected, setIsMonthSelected] = useState(false);

  function isCvvValid(value) {
    let cvvRegex = /^\d{3,4}$/g;
    const checkCvvValid = cvvRegex.test(value);
    // console.log(`isCvvValid ${isCvvValid}`);
    props.handleValidation(checkCvvValid && isMonthSelected && isYearSelected);
    return checkCvvValid;
  }
  // CVV - state maintenance, validation and error handling.
  const {
    inputValue: cvv,
    handleInputValue: handleCvvInfo,
    handleIftouched: touchedCvv,
    isError: cvvError,
    isValid: checkingIfCvvValid,
  } = useInputValidation(isCvvValid);

  //***********End of CVV validation ***********
  //Function create New Date , <select>/ <option> for Years to show dynamically.
  let currentYear = new Date().getFullYear();
  let arrayOfYears = [<option value="" key="blank_year"></option>];
  for (let i = 0; i < 12; i++) {
    arrayOfYears.push(
      <option key={i} value={currentYear + i}>
        {currentYear + i}
      </option>
    );
  }

  function handleSelectYear(e) {
    setYear(+e.target.value);
    if (e.target.value) {
      setIsYearSelected(true);
    } else {
      setIsYearSelected(false);
      setIsMonthSelected(false);
    }
  }

  // Function create <select>/ <option> for Months to show dynamically.
  let monthsOfYear = [<option key="blank_month"></option>];
  if (year === currentYear) {
    let month = new Date().getMonth() + 1;

    for (let i = month; i <= 12; i++) {
      monthsOfYear.push(<option key={`${i}month`}>{i}</option>);
    }
  } else {
    for (let i = 0; i < 12; i++) {
      monthsOfYear.push(
        <option key={`${i}month`} value={i + 1}>
          {i + 1}
        </option>
      );
    }
  }
  function handleMonthChange(e) {
    if (e.target.value) {
      setIsMonthSelected(true);
    } else {
      setIsMonthSelected(false);
    }
  }

  return (
    <section>
      <div className={styles.expiration}>
        <span>
          Year
          <select className={styles.year} onChange={handleSelectYear}>
            {arrayOfYears}
          </select>
        </span>
        <span>
          Month
          <select
            className={
              isYearSelected ? styles.month_active : styles.month_inactive
            }
            onChange={handleMonthChange}
          >
            {monthsOfYear}
          </select>
        </span>
        <span className={styles.cvv_active}>
          <label htmlFor="cvv">CVV</label>
          <input
            type="text"
            id="cvv"
            key="form_cvv"
            value={isMonthSelected ? cvv : ""}
            onChange={handleCvvInfo}
            onBlur={touchedCvv}
            disabled={isMonthSelected ? "" : "disabled"}
          />
        </span>
      </div>
      {cvvError && (
        <div className={styles.error}>
          Please enter valid cvv code. Should have 3 or 4 digits.
        </div>
      )}
    </section>
  );
}
