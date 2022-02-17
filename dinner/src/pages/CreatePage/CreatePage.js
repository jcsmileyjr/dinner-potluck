import "./createPage.css";
import React, { useState } from "react";
import Header from "../../components/Header/header";
import EventWizard from "../../components/EventWizard/EventWizard";

const CreatePage = ({ goto }) => {
  const [showModal, setShowModal] = useState(true);
  const [currentWizardData, setCurrentWizardData] = useState("");

  const confirmWizard = () => {
    setShowModal(false);
    console.log("Confirm works");
  };

  const cancelWizard = () => {
    setShowModal(false);
    console.log("cancel works");
  };

  return (
    <div>
      <main className="createPage--container">
        <Header event={goto} headerButtonTitle="Home" />
        <h1 className="createPage__pageTitle--style">Create an Event</h1>
        <div className="createPage__main--container">
          <EventWizard
            isVisible={showModal}
            eventWizardTitle="Short title for the Event"
            eventWizardData={currentWizardData}
            getWizardData={setCurrentWizardData}
            confirmWizrdData={confirmWizard}
            closeWizardData={cancelWizard}
          />
        </div>
      </main>
    </div>
  );
};

export default CreatePage;
