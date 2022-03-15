import LandingPage from "./pages/LandingPage/landingPage";
import EventPage from "./pages/EventPage/EventPage";
import PlanningPage from "./pages/PlanningPage/PlanningPage";
import CreatePage from "./pages/CreatePage/CreatePage";
import "./App.css";
import React, { useState, useEffect } from "react";
import testData from "./data/eventData.json";
import axios from "axios";

function App() {
  const [currentPage, setCurrentPage] = useState("Landing Page");
  const [showInputError, setInputError] = useState(false);
  const [currentEvent, setCurrentEvent] = useState([]);
  const [allEvents, setAllEvents] = useState([]);
  let pass = true;

  useEffect(() => {
    updateData();
  }, []);

  const updateData = async () => {
    if (localStorage.getItem("potluckData") === null) {
      setAllEvents(testData);
      localStorage.setItem("potluckData", JSON.stringify(testData));
    } else {
      console.log("second");
      let savedData = JSON.parse(localStorage.getItem("potluckData"));

      const url = ".netlify/functions/updateCodes";
      axios.post(url, JSON.stringify(savedData)).then(function (response) {
        const data = response.data;
        setAllEvents(data.data);
      });

      // let data = await fetch(".netlify/functions/getMeal");
      // const information = await data.json();
      // console.log(information);
    }
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  // Validate the user's code and return the menu if true
  const getCurrentEvent = (code) => {
    let foundCode = true;

    // Search meal events on the local device. If found, add to local device data
    allEvents.forEach((event) => {
      if (event.code === code) {
        setCurrentEvent(event);
        goToPage("Planning Page");
        setInputError(false);
        foundCode = false;
        return;
      }
    });

    // If can't find code locally, then search online for the meal matching that code and add that meal to the local device
    if (foundCode) {
      const url = ".netlify/functions/getMealByCode";
      axios.post(url, JSON.stringify(code)).then(function (response) {
        const data = response.data;
        if (data.data.answer) {
          //setCurrentEvent(data.data.meal);
          createNewEvent(data.data.meal);
          //goToPage("Planning Page");
          setInputError(false);
          foundCode = false;
          return;
        }
      });
    }

    if (foundCode) setInputError(true);
  };

  // function use to create a new event from the online database or when a user create a new event on the device (then updated to online)
  const createNewEvent = (event, newEvent = false) => {
    console.log("old event")
    console.log(event)
    // Event pull from online database. Already has an _id
    if(!newEvent){
      setCurrentEvent(event);
      let events = allEvents;
      events.push(event);
      setAllEvents(events);
      localStorage.setItem("potluckData", JSON.stringify(events));
      goToPage("Planning Page");
    }

    // New user event is saved to online database, returned, and update local device with the _id
    if (newEvent) {
      const url = ".netlify/functions/createMeal";
      axios.post(url, JSON.stringify(event)).then(function (response) {
        const data = response.data.data;
        console.log("new event with id")
        console.log(data);
        setCurrentEvent(data);
        let events = allEvents;
        events.push(data);
        setAllEvents(events);
        localStorage.setItem("potluckData", JSON.stringify(events));
        goToPage("Planning Page");
      });
    }


  };

  // Function called in the UpdateMenu component to update event's menu
  const confirmPickedItem = (foodItem, userName) => {
    if (userName === "" || foodItem === "") return;
    let foodItemFound = false;
    currentEvent.menu.forEach((item) => {
      if (item.food === foodItem && userName !== "") {
        item.asignee = userName;
        foodItemFound = true;
      }
    });

    if (foodItemFound === false) {
      currentEvent.menu.push({ food: foodItem, asignee: userName });
    }

    const url = ".netlify/functions/updateMenu";
    axios.post(url, JSON.stringify(currentEvent)).then(function (response) {
      const data = response.data;
      console.log(data);
    });

    updatePotluckData();
  };

  const updatePotluckData = () => {
    let events = allEvents;
    events.forEach((event, index) => {
      if (event.code === currentEvent.code) {
        events[index] = currentEvent;
      }
    });

    setAllEvents(events);
    localStorage.setItem("potluckData", JSON.stringify(events));
  };

  return (
    <div className="App">
      {currentPage === "Landing Page" && (
        <LandingPage
          goto={() => {
            goToPage("Event Page");
          }}
        />
      )}
      {currentPage === "Event Page" && (
        <EventPage
          eventData={allEvents}
          goto={() => {
            goToPage("Landing Page");
          }}
          joinPlanning={(code) => {
            getCurrentEvent(code);
          }}
          gotoCreatePage={() => {
            goToPage("Create Page");
          }}
          eventInputError={showInputError}
        />
      )}
      {currentPage === "Planning Page" && (
        <PlanningPage
          confirmPicked={(foodItem, userName) =>
            confirmPickedItem(foodItem, userName)
          }
          event={currentEvent}
          goto={() => {
            goToPage("Landing Page");
          }}
        />
      )}
      {currentPage === "Create Page" && (
        <CreatePage
          goto={() => {
            goToPage("Landing Page");
          }}
          gotoEventPage={() => {
            goToPage("Event Page");
          }}
          createEvent={(event) => {
            createNewEvent(event, pass);
          }}
        />
      )}
    </div>
  );
}

export default App;
