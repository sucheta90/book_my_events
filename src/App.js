import React from "react";
import { useState } from "react";
import "./App.css";
import Events from "./components/Events/Events";
import Header from "./components/Header/Header.js";
import EventContainer from "./components/Events/EventContainer";
// import EventDetails from "./components/Events/EventDetails";
// import Photos from "..public/image";
// import Card from "./components/UI/Card";

export default function App() {
  const eventData = [
    {
      id: "e1",
      title: "Morgan Wade",
      image: "images/israel-palacio-Y20JJ_ddy9M-unsplash.jpg",
      date: new Date(2023, 3, 16),
      // date: "April 16, 2023",
      time: "Sun 7:30 - 9:30PM",
      location: "The National",
      city: "Richmond",
      state: "VA",
      redClass: 100,
      greenClass: 60,
      blueClass: 40,
    },
    {
      id: "e2",
      title: "Lady A",
      date: new Date(2023, 7, 26),
      // date: "August 26,2023",
      time: "Sat 6:30 - 11:pm",
      location: "The Meadow Event Park",
      address:
        '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.345958848021!2d-77.4237689!3d37.8521948!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89b13055411e21a1%3A0xb8e8180a63b39c03!2sThe%20Meadow%20Event%20Park!5e0!3m2!1sen!2sus!4v1672954327847!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>',
      city: "Doswell",
      state: "VA",
      redClass: 150,
      greenClass: 90,
      blueClass: 60,
    },
    {
      id: "e3",
      title: "Patriotic Festival Presents Sam Hunt With Jordan Davis",
      date: new Date(2023, 4, 27),
      // date: "May 27, 2023",
      time: "Sat, 7 - 11PM",
      location: "Norfolk Scope Arena",
      city: "Norfolk",
      state: "VA",
      redClass: 100,
      greenClass: 80,
      blueClass: 60,
    },
    {
      id: "e4",
      title: "Carrie Underwood - The Denim & Rhinestones Tour",
      image: "images/pawel-szvmanski-efSRqS8esSo-unsplash.jpg",
      date: new Date(2023, 1, 15),
      // date: "February 15,2023",
      time: "Wed, 7:30 -11:30 PM",
      location: "Capital One Arena",
      city: "Washington",
      state: "DC",
      redClass: 350,
      greenClass: 200,
      blueClass: 100,
    },
    {
      id: "e5",
      title: "Kenny Chesney",
      date: new Date(2023, 2, 23),
      // date: "Mar 23,2023",
      time: "Thu, 7:30 -11:59 PM",
      location: "John Paul Jones Arena",
      city: "Charlottesville",
      state: "VA",
      redClass: 200,
      greenClass: 120,
      blueClass: 80,
    },
    {
      id: "e6",
      title: "Thomas Rhett",
      date: new Date(2023, 5, 21),
      // date: "June 21,2023",
      time: "Wed 7:30 PM",
      location: "CGF Bank Arena",
      city: "Baltimore",
      state: "MD",
      redClass: 300,
      greenClass: 250,
      blueClass: 200,
    },
  ];
  // const [content, setContent] = useState({});
  // function handleClick(e) {
  //   let contentId = e.target.id;

  //   // let contentObj = {};
  //   for (let i = 0; i < eventData.length; i++) {
  //     if (eventData[i].id === contentId) {
  //       setContent(eventData[i]);
  //       return;
  //     }
  //   }
  // }
  return (
    <div className="App">
      <Header />
      <Events events={eventData} child={<EventContainer />} />
    </div>
  );
}
