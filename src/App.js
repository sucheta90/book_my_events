import "./App.css";
import Events from "./components/Events/Events";
import Header from "./components/Header/Header.js";

function App() {
  const eventData = [
    {
      id: "e1",
      title: "Morgan Wade",
      date: "April 16, 2023",
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
      date: "August 26,2023",
      time: "Sat 6:30 - 11:pm",
      location: "The Meadow Event Park",
      city: "Doswell",
      state: "VA",
      redClass: 150,
      greenClass: 90,
      blueClass: 60,
    },
    {
      id: "e3",
      title: "Patriotic Festival Presents Sam Hunt With Jordan Davis",
      date: "May 27, 2023",
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
      date: "February 15,2023",
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
      date: "Mar 23,2023",
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
      date: "June 21,2023",
      time: "Wed 7:30 PM",
      location: "CGF Bank Arena",
      city: "Baltimore",
      state: "MD",
      redClass: 300,
      greenClass: 250,
      blueClass: 200,
    },
  ];
  function handleClick(e) {
    console.log(e.target);
  }
  return (
    <div className="App">
      <Header />
      <Events events={eventData} onClick={handleClick} />
    </div>
  );
}

export default App;
