import LandingPage from "./pages/LandingPage/landingPage";
import EventPage from "./pages/EventPage/EventPage";
import './App.css';
import React, {useState} from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState("Landing Page");

  const goToPage = (page) => {
    setCurrentPage(page);
  }

  return (
    <div  className="App">
      {currentPage === "Landing Page" && <LandingPage goto={() => {goToPage("Event Page")}} />}
      {currentPage === "Event Page" && <EventPage goto={() => {goToPage("Landing Page")}} />}
    </div>
  );
}

export default App;
