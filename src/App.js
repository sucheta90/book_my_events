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
      direction:
        "https://www.google.com/maps/dir/The+National,+708+E+Broad+St,+Richmond,+VA+23219/37.6842319,-77.5275458/@37.6143589,-77.655379,11z/data=!3m1!4b1!4m9!4m8!1m5!1m1!1s0x89b11123366147d1:0x8ad84a53b5786a35!2m2!1d-77.435246!2d37.5418426!1m1!4e1",
      city: "Richmond",
      state: "VA",
      description:
        "No Signs Of Slowing Down Tour MORGAN WADE Meg McRee. Door opens 6:30PM",
      chairs: {
        red: 100,
        green: 60,
        blue: 40,
      },
      // redClass: 100,
      // greenClass: 60,
      // blueClass: 40,
    },
    {
      id: "e2",
      title: "Lady A",
      date: new Date(2023, 7, 26),
      image: "images/nainoa-shizuru-NcdG9mK3PBY-unsplash.jpg",
      // date: "August 26,2023",
      time: "Sat 6:30 - 11:pm",
      location: "The Meadow Event Park",
      direction:
        "https://www.google.com/maps/dir/The+Meadow+Event+Park,+Dawn+Boulevard,+Doswell,+VA/37.6842319,-77.5275458/@37.7559077,-77.6402067,11z/data=!3m1!4b1!4m9!4m8!1m5!1m1!1s0x89b13055411e21a1:0xb8e8180a63b39c03!2m2!1d-77.4237689!2d37.8521948!1m1!4e1",
      city: "Doswell",
      state: "VA",
      description: "Catch the team live at the Meadow Event Park, Doswell, VA",
      chairs: {
        red: 150,
        green: 90,
        blue: 60,
      },
      // redClass: 150,
      // greenClass: 90,
      // blueClass: 60,
    },
    {
      id: "e3",
      title: "Patriotic Festival Presents Sam Hunt With Jordan Davis",
      date: new Date(2023, 4, 27),
      image: "images/hanny-naibaho-aWXVxy8BSzc-unsplash.jpg",
      // date: "May 27, 2023",
      time: "Sat, 7 - 11PM",
      location: "Norfolk Scope Arena",
      direction:
        "https://www.google.com/maps/dir/Norfolk+Scope+Arena,+East+Brambleton+Avenue,+Norfolk,+VA/37.6842319,-77.5275458/@37.2668424,-78.0165108,8z/data=!3m1!4b1!4m9!4m8!1m5!1m1!1s0x89ba9810fde89763:0x65e78788cb9680ff!2m2!1d-76.286878!2d36.8532544!1m1!4e1",
      city: "Norfolk",
      state: "VA",
      description:
        "The Renewed Norfolk Scope Arena is our Concert Zone. Scope will provide artist, fans with a safe, climate-controlled experience with upgraded amenities. Patriotic Festival Presents Sam Hunt With Jordan Davis",
      chairs: {
        red: 100,
        green: 80,
        blue: 60,
      },
      // redClass: 100,
      // greenClass: 80,
      // blueClass: 60,
    },
    {
      id: "e4",
      title: "Carrie Underwood - The Denim & Rhinestones Tour",
      image: "images/pawel-szvmanski-efSRqS8esSo-unsplash.jpg",
      date: new Date(2023, 1, 15),
      // date: "February 15,2023",
      time: "Wed, 7:30 -11:30 PM",
      location: "Capital One Arena",
      direction:
        "https://www.google.com/maps/dir/Capital+One+Arena,+F+Street+Northwest,+Washington,+DC/37.6842319,-77.5275458/@38.2784622,-77.8065101,9z/data=!3m1!4b1!4m9!4m8!1m5!1m1!1s0x89b7b78e4f5f6873:0x75cc04db1e11f711!2m2!1d-77.0208568!2d38.8981675!1m1!4e1",
      city: "Washington",
      state: "DC",
      description:
        "Come Watch the rising start live at the Capital One Arena. Also featuring Jimmy Allen. ",
      chairs: {
        red: 350,
        green: 200,
        blue: 100,
      },
      //   redClass: 350,
      // greenClass: 200,
      // blueClass: 100,
    },
    {
      id: "e5",
      title: "Kenny Chesney",
      image: "images/austin-neill-hgO1wFPXl3I-unsplash.jpg",
      date: new Date(2023, 2, 23),
      // date: "Mar 23,2023",
      time: "Thu, 7:30 -11:59 PM",
      location: "John Paul Jones Arena",
      direction:
        "https://www.google.com/maps/dir/John+Paul+Jones+Arena,+295+Massie+Rd,+Charlottesville,+VA+22903/37.6842319,-77.5275458/@37.8493359,-79.1513557,8z/data=!3m1!4b1!4m9!4m8!1m5!1m1!1s0x89b3864d28f0ae75:0xe7373d8ee0ec3ce!2m2!1d-78.5067583!2d38.0459528!1m1!4e1",

      city: "Charlottesville",
      state: "VA",
      description:
        "Kenny Chesney I Go Back 2023 Tour begins at the Bryce Jordan Center, Saturday, March 25 with Special Guest Kelsea Ballerini. A Full-On Taste of East Tennessee Brings the Music to the People!",
      chairs: {
        red: 200,
        green: 160,
        blue: 100,
      },
      //   redClass: 200,
      // greenClass: 120,
      // blueClass: 80,
    },
    {
      id: "e6",
      title: "Thomas Rhett",
      image: "images/pien-muller-Fh-Q-xfdh_o-unsplash.jpg",
      date: new Date(2023, 5, 21),
      // date: "June 21,2023",
      time: "Wed 7:30 PM",
      location: "CGF Bank Arena",
      direction:
        "https://www.google.com/maps/dir/CFG+Bank+Arena,+Baltimore+Arena,+201+W+Baltimore+St,+Baltimore,+MD+21201/37.6842319,-77.5275458/@38.4709209,-78.37444,8z/data=!3m1!4b1!4m9!4m8!1m5!1m1!1s0x89c804a0052f0a61:0x2b84214aa60fc226!2m2!1d-76.6187071!2d39.2885729!1m1!4e1",
      city: "Baltimore",
      state: "MD",
      description:
        "Buy Thomas Rhett Parking in Baltimore passes from Vivid Seats for the concert on 06/21/2023 and shop with confidence thanks to our 100% Buyer Guarantee.",
      chairs: {
        red: 300,
        green: 260,
        blue: 200,
      },
      //   redClass: 300,
      // greenClass: 250,
      // blueClass: 200,
    },
  ];

  return (
    <div className="App">
      <Header />
      <Events events={eventData} child={<EventContainer />} />
    </div>
  );
}
