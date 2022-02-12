import LandingPage from "./pages/LandingPage/landingPage";
import EventPage from "./pages/EventPage/EventPage";
import PlanningPage from "./pages/PlanningPage/PlanningPage";
import './App.css';
import React, {useState} from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState("Landing Page");

  const goToPage = (page) => {
    setCurrentPage(page);
  }

  const validateEventCode = code => {
    const presetCode = "123"
    console.log(`Code is ${code}`)
    if(code === presetCode){
      console.log("Pass. Return true")
      goToPage("Planning Page");
    }else{
      console.log("Failed. Return false")
      return false;
    }
  }

  return (
    <div  className="App">
      {currentPage === "Landing Page" && <LandingPage goto={() => {goToPage("Event Page")}} />}
      {currentPage === "Event Page" && <EventPage goto={() => {goToPage("Landing Page")}} joinPlanning={(code) => {validateEventCode(code)}} />}
      {currentPage === "Planning Page" && <PlanningPage goto={() => {goToPage("Landing Page")}} />}
    </div>
  );
}

export default App;
