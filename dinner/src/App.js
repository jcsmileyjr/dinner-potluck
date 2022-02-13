import LandingPage from "./pages/LandingPage/landingPage";
import EventPage from "./pages/EventPage/EventPage";
import PlanningPage from "./pages/PlanningPage/PlanningPage";
import './App.css';
import React, {useState} from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState("Landing Page");
  const [showInputError, setInputError] = useState(false);
  const [currentEvent, setCurrentEvent] = useState([]);

  const goToPage = (page) => {
    setCurrentPage(page);
  }

  // Validate the user's code and return the menu if true
  const getCurrentEvent = (code) => {
    fetch("../../data/eventData.json")
        .then((response) => response.json())
        .then((data) => {
            data.forEach(event => {
              if(event.code === code){
                setCurrentEvent(event);
                goToPage("Planning Page");
                return;
              }
            });
    });
    
    setInputError(true);
  }

  return (
    <div  className="App">
      {currentPage === "Landing Page" && <LandingPage goto={() => {goToPage("Event Page")}} />}
      {currentPage === "Event Page" && <EventPage goto={() => {goToPage("Landing Page")}} joinPlanning={(code) => {getCurrentEvent(code)}} eventInputError={showInputError} />}
      {currentPage === "Planning Page" && <PlanningPage event={currentEvent} goto={() => {goToPage("Landing Page")}} />}
    </div>
  );
}

export default App;
