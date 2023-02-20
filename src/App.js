import React, { useEffect, useState } from "react";
import "./App.css";
import Events from "./components/Events/Events";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer";
import Errorwindow from "./components/Error/Errorwindow";

export default function App() {
  //state for tracking the Main Evenet data that is being fetched from the database.
  const [eventData, setEventData] = useState([]);
  const [isError, setIsError] = useState(false); //state maintains a flag that helps determine if an error messgae should be displayed on screen.
  const [isLoading, setIsLoading] = useState(true); // set true while loading the app. Also, helps to reload app.
  const [filteredEventData, setFilteredEventData] = useState([]); // events that match the search criteria are stored in filteredEventData.
  const [isSearching, setIssearching] = useState(false); // to determine which data to render (filtered data / actual event data)

  // Handler function - called when a user search for a particular keyword. This handler function is passed as props, to the Header component.
  function handleSearchInput(e) {
    setIssearching(true);

    const myRegex = new RegExp(e.target.value, "i");
    const searchFilter = eventData.filter(
      (event) =>
        myRegex.test(event.title) ||
        myRegex.test(event.city) ||
        myRegex.test(event.location) ||
        myRegex.test(event.state)
    );

    return setFilteredEventData(searchFilter);
  }

  let handleAppReload = () => setIsLoading(true); // triggers App reload

  // This async function fetched data form the Firebase database
  let fetchData = () => {
    setIsError(false);

    async function handleFetch() {
      try {
        const response = await fetch(
          // "https://bookmyevents-2ad9f-default-rtdb.firebaseio.com/events.json"
          "https://eventtickets-44017-default-rtdb.firebaseio.com/events.json"
        );

        if (!response.ok) {
          throw new Error("Something went wrong. Please try again.");
        }

        const data = await response.json();
        if (!data) {
          throw new Error("Something went wrong. Please try again.");
        }

        const latestEvents = [];

        for (let key in data) {
          let obj = data[key];
          obj.date = new Date(obj.date);
          obj.id = key;
          latestEvents.push(obj);
        }
        let sortedEventData = latestEvents.sort((a, b) => {
          let dateA = new Date(a.date);
          let dateB = new Date(b.date);
          if (dateA > dateB) {
            return 1;
          } else if (dateB > dateA) {
            return -1;
          }
        });
        setEventData(sortedEventData);
      } catch (error) {
        // console.log(`inside catch`);
        setIsError(true);
      }
      setIsLoading(false);
    }
    handleFetch();
  };
  useEffect(() => {
    if (isLoading) {
      fetchData();
      // console.log("after handle fetch call");
    }
  }, [isLoading]);

  return (
    <div className="App">
      <div className="container">
        <Header handleSearchInput={handleSearchInput} />
        {isError ? (
          <Errorwindow
            errorMessage={
              <h3>Sorry We can't process your request please try again</h3>
            }
            onClick={handleAppReload}
          />
        ) : (
          <Events
            events={isSearching ? filteredEventData : eventData}
            // Below is the handler function to trigger app reload which is being passed in SeatBooking.js, through EventContainer.
            handleAppReload={handleAppReload}
          />
        )}

        <Footer />
      </div>
    </div>
  );
}
