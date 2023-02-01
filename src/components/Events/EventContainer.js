import React, { useState } from "react";
import EventItem from "./EventItem";
import EventDetails from "./EventDetails";
import SeatBooking from "../SeatBooking/SeatBooking";
import styles from "./EventContainer.module.css";

// import Events from "./Events";

export default function EventContainer(props) {
  const eventDetail = {
    image: props.event.image,
    description: props.event.description,
    direction: props.event.direction,
    location: props.event.location,
    city: props.event.city,
    state: props.event.state,
  };
  const eventItem = {
    location: props.event.location,
    id: props.event.id,
    city: props.event.city,
  };
  const price = props.event.price;

  const occupiedSeats = props.event.occupiedSeats;
  const eventId = props.event.id;

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
  // console.log(`inside container ${occupiedSeats}`);
  return (
    <>
      <EventItem
        id={props.event.id}
        title={props.event.title}
        date={props.event.date}
        time={props.event.time}
        location={props.event.location}
        city={props.event.city}
        state={props.event.state}
        redClass={props.event.redClass}
        greenClass={props.event.greenclass}
        blueClass={props.event.blueclass}
        eventItem={eventItem}
        onClick={showDetail}
        toShow={show}
      />
      {show === "EventDetail" && (
        <EventDetails
          hideDetailHandler={hideDetail}
          bookNowHandler={bookNow}
          event={eventDetail}
        />
      )}
      {show === "bookNow" && (
        <SeatBooking
          hideSeatingHandler={hideSeating}
          price={price}
          occupiedSeats={occupiedSeats}
          eventId={eventId}
        />
      )}
    </>
  );
}
