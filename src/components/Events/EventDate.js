import React from "react";
import "./EventDate.css";

export default function EventDate(props) {
  const month = props.date.toLocaleString("en-US", { month: "short" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.toLocaleString("en-US", { year: "2-digit" });
  return (
    <div className="date-item" data-testid="eventDate">
      <div>{day}</div>
      <div>{month}</div>
      <div>{year}</div>
    </div>
  );
}
