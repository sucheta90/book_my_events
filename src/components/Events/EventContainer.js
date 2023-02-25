import React, { useState } from "react";
import EventItem from "./EventItem";
import EventDetails from "./EventDetails";
import SeatBooking from "../SeatBooking/SeatBooking";
import PriceContextProvider from "../../context/price-context";
// import styles from "./EventContainer.module.css";

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

  // Handler function to show event details onClick event + More Info
  function showDetail(e) {
    setShow("EventDetail");
  }
  // Handler function to hide event details onClick event + Hide Info
  function hideDetail(e) {
    setShow("");
  }
  // Handler function to open Gallery view onClick event + Book now
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
        <PriceContextProvider price={price}>
          <SeatBooking
            hideSeatingHandler={hideSeating}
            // price={price}
            occupiedSeats={occupiedSeats}
            eventId={eventId}
            // handleAppReload={props.handleAppReload}
          />
        </PriceContextProvider>
      )}
    </>
  );
}
