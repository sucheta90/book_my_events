import React, { useState } from "react";
import EventItem from "./EventItem";
import EventDetails from "./EventDetails";
import Seats from "../SeatBooking/Seats";
import styles from "./EventContainer.module.css";

// import Events from "./Events";

export default function EventContainer(props) {
  const eventDetail = {
    id: props.event.id,
    date: props.event.date,
  };
  const eventItem = {
    id: props.event.id,
    city: props.event.city,
  };

  const [show, setShow] = useState("");
  function showDetail(e) {
    setShow("EventDetail");
  }
  function hideDetail(e) {
    setShow("");
  }
  function bookNow(e) {
    setShow("bookNow");
  }
  function hideSeating() {
    setShow("EventDetail");
  }
  return (
    <>
      <EventItem
        id={props.event.id}
        title={props.event.title}
        date={props.event.date}
        time={props.event.time}
        location={props.event.location}
        city={props.event.city}
        redClass={props.event.redClass}
        greenClass={props.event.greenclass}
        blueClass={props.event.blueclass}
        eventItem={eventItem}
        onClick={showDetail}
        toShow={show}
      />
      {show == "EventDetail" && (
        <EventDetails hideDetailHandler={hideDetail} bookNowHandler={bookNow} />
      )}
      {show == "bookNow" && <Seats hideSeatingHandler={hideSeating} />}
    </>
  );
}
