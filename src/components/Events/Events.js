import React from "react";
import styles from "./Events.module.css";
import Card from "../UI/Card";
import EventItem from "./EventItem";

export default function Events(props) {
  const eventItem = props.events.map((each) => {
    return (
      <EventItem
        key={each.id}
        title={each.title}
        date={each.date}
        time={each.time}
        location={each.location}
        city={each.city}
        redClass={each.redClass}
        greenClass={each.greenclass}
        blueClass={each.blueclass}
      />
    );
  });

  return <div className={styles.event_list}>{eventItem}</div>;
}
