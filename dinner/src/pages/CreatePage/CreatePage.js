import "./createPage.css";
import React, { useState } from "react";
import Header from "../../components/Header/header";
import EventWizard from "../../components/EventWizard/EventWizard";

const CreatePage = ({ goto, gotoPlanning }) => {
  const [showModal, setShowModal] = useState(true);
  const [currentWizardData, setCurrentWizardData] = useState("");
  const [currentWizard, setCurrentWizard] = useState(1);
  const [newEvent, setNewEvent] = useState({});

  const confirmWizard = () => {
    console.log(currentWizardData);
    let wizardEvent = newEvent;
    if(currentWizard === 1){
        wizardEvent.EventTitle = currentWizardData;
        setNewEvent(newEvent => ({
            ...newEvent, ...wizardEvent
        }) )
        setCurrentWizard(2);
    }
    if(currentWizard === 2){
        wizardEvent.EventDate = currentWizardData;
        setNewEvent(newEvent => ({
            ...newEvent, ...wizardEvent
        }) )
        setCurrentWizard(3);
        console.log(newEvent)
    }    
    
    setCurrentWizardData("")
    
  };

  const cancelWizard = () => {
    setShowModal(false);
    gotoPlanning();
  };

  return (
    <div>
      <main className="createPage--container">
        <Header event={goto} headerButtonTitle="Home" />
        <h1 className="createPage__pageTitle--style">Create an Event</h1>
        <div className="createPage__main--container">
            {currentWizard === 1 && 
                <EventWizard
                    isVisible={showModal}
                    eventWizardTitle="Short title for the Event"
                    eventWizardData={currentWizardData}
                    getWizardData={setCurrentWizardData}
                    confirmWizrdData={confirmWizard}
                    closeWizardData={cancelWizard}
                />
            }
            {currentWizard === 2 && 
                <EventWizard
                    isVisible={showModal}
                    eventWizardTitle="What is the event's Date"
                    eventWizardData={currentWizardData}
                    getWizardData={setCurrentWizardData}
                    confirmWizrdData={confirmWizard}
                    closeWizardData={cancelWizard}
                />
            }
        </div>
      </main>
    </div>
  );
};

export default CreatePage;
