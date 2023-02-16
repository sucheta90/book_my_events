import React, { useEffect, useState } from "react";
import "./App.css";
import Events from "./components/Events/Events";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer";
import Errorwindow from "./components/Error/Errorwindow";

export default function App() {
  const [eventData, setEventData] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [filteredEventData, setFilteredEventData] = useState([]);
  const [isSearching, setIssearching] = useState(false);

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

  let handleAppReload = () => setIsLoading(true);

  let fetchData = () => {
    setIsError(false);

    async function handleFetch() {
      try {
        const response = await fetch(
          "https://bookmyevents-2ad9f-default-rtdb.firebaseio.com/events.json"
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
            handleAppReload={handleAppReload}
          />
        )}

        <Footer />
      </div>
    </div>
  );
}
