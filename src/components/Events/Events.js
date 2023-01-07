import React from "react";
import styles from "./Events.module.css";
// import Card from "../UI/Card";

import EventContainer from "./EventContainer";

export default function Events(props) {
  const eventItem = props.events.map((event) => {
    return (
      <EventContainer
        key={props.events.indexOf(event)}
        id={`event_container_${props.events.indexOf(event)}`}
        event={event}
      />
    );
  });

  return <div className={styles.event_list}>{eventItem}</div>;
}
