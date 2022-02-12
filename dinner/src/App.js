import LandingPage from "./pages/LandingPage/landingPage";
import EventPage from "./pages/EventPage/EventPage";
import PlanningPage from "./pages/PlanningPage/PlanningPage";
import './App.css';
import React, {useState} from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState("Landing Page");
  const [showInputError, setInputError] = useState(false);

  const goToPage = (page) => {
    setCurrentPage(page);
  }

  const validateEventCode = code => {
    const presetCode = "123"
    if(code === presetCode){
      goToPage("Planning Page");
    }else{
      setInputError(true);
    }
  }

  return (
    <div  className="App">
      {currentPage === "Landing Page" && <LandingPage goto={() => {goToPage("Event Page")}} />}
      {currentPage === "Event Page" && <EventPage goto={() => {goToPage("Landing Page")}} joinPlanning={(code) => {validateEventCode(code)}} eventInputError={showInputError} />}
      {currentPage === "Planning Page" && <PlanningPage goto={() => {goToPage("Landing Page")}} />}
    </div>
  );
}

export default App;
