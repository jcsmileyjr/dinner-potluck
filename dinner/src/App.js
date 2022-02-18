import LandingPage from "./pages/LandingPage/landingPage";
import EventPage from "./pages/EventPage/EventPage";
import PlanningPage from "./pages/PlanningPage/PlanningPage";
import CreatePage from "./pages/CreatePage/CreatePage";
import "./App.css";
import React, { useState, useEffect } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState("Landing Page");
  const [showInputError, setInputError] = useState(false);
  const [currentEvent, setCurrentEvent] = useState([]);
  const [allEvents, setAllEvents] = useState([]);

  useEffect(()=> {
    updateData();
  }, [])

  const updateData = () => {   
    if (localStorage.getItem("potluckData") === null) {
      console.log("Fetching Data")
      fetch("../../data/eventData.json")
          .then((response) => response.json())
          .then((data) => {
              setAllEvents(data);
              localStorage.setItem("potluckData", JSON.stringify(data));
              console.log(localStorage.getItem("potluckData"));
      });
    }else{
      console.log("Data is already saved to local storage")
      let savedData = JSON.parse(localStorage.getItem('potluckData')); 
      setAllEvents(savedData);
      console.log(savedData);     
    }
    
  };

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  // Validate the user's code and return the menu if true
  const getCurrentEvent = (code) => {
    allEvents.forEach((event) => {
      if (event.code === code) {
        setCurrentEvent(event);
        goToPage("Planning Page");
        setInputError(false);
        return;
      }
    });
    setInputError(true);
  };

  const createNewEvent = (event) => {
    setCurrentEvent(event);
    goToPage("Planning Page");
  }

  // Function called in the UpdateMenu component to update event's menu
  const confirmPickedItem = (foodItem, userName) => {
    let foodItemFound = false;
    currentEvent.menu.forEach((item) => {
      if (item.food === foodItem) {
        item.asignee = userName;
        foodItemFound = true;
      }
    });

    if (foodItemFound === false) {
      currentEvent.menu.push({ food: foodItem, asignee: userName });
    }

    updatePotluckData();
  };

  const updatePotluckData = () => {
    let events = allEvents;
    events.forEach( (event, index) => {
      if(event.code === currentEvent.code){
        events[index] = currentEvent;
      }
    });
    
    setAllEvents(events);
    localStorage.setItem("potluckData", JSON.stringify(events));
  }

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
          gotoCreatePage={ () => {
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
            createNewEvent(event);
          }}
        />
      )}      
    </div>
  );
}

export default App;
