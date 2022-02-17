import "./createPage.css";
import React, { useState } from "react";
import Header from "../../components/Header/header";
import EventWizard from "../../components/EventWizard/EventWizard";
import Menu from "../../components/Menu/Menu";
import Pillbox from "../../components/Pillbox/Pillbox";
import LineItem from "../../components/LineItem/LineItem";

const CreatePage = ({ goto, gotoEventPage, createEvent}) => {
  const [showModal, setShowModal] = useState(true);
  const [currentWizardData, setCurrentWizardData] = useState("");
  const [currentWizard, setCurrentWizard] = useState(1);
  const [newEvent, setNewEvent] = useState({menu:[]});
  const [pageTitle, setPageTitle] = useState("Create an Event");
  const [pageDate, setPageDate] = useState("None");

  const confirmWizard = () => {
    console.log(currentWizardData);
    let wizardEvent = newEvent;
    if(currentWizard === 1){
        setPageTitle(currentWizardData)
        wizardEvent.EventTitle = currentWizardData;
        setNewEvent(newEvent => ({
            ...newEvent, ...wizardEvent
        }) )
        setCurrentWizard(prevCurrent => prevCurrent + 1);
    }
    if(currentWizard === 2){
        setPageDate(currentWizardData)
        wizardEvent.EventDate = currentWizardData;
        setNewEvent(newEvent => ({
            ...newEvent, ...wizardEvent
        }) )
        setCurrentWizard(prevCurrent => prevCurrent + 1);
    }
    
    if(currentWizard >= 3){
        const menuItem = {"food":currentWizardData, "asignee":"none"}
        wizardEvent.menu.push(menuItem);
        setNewEvent(newEvent => ({
            ...newEvent, ...wizardEvent
        }) )
        setCurrentWizard(prevCurrent => prevCurrent + 1);
    }
    
    console.log(newEvent)
    setCurrentWizardData("")
    
  };

  const cancelWizard = () => {
    setShowModal(false);
    gotoEventPage();
  };

  const finishedWizard = () => {
    let wizardEvent = newEvent;
    wizardEvent.code = "111";
    if(currentWizardData !== ""){
        const menuItem = {"food":currentWizardData, "asignee":"none"}
        wizardEvent.menu.push(menuItem);
        setNewEvent(newEvent => ({
            ...newEvent, ...wizardEvent
        }) )
    }

    setShowModal(false);
    //createEvent(newEvent);
    setCurrentWizard("final");
  }

  const openUpdateMenu = (foodItem) => {
    setShowModal(true);
    //setChosenFood(foodItem);
    //setUserInputtedName("");
  };

  const closeUpdateMenu = () => {
    setShowModal(false);
    //setUserInputtedName("");
  };

  const confirmUpdateMenu = () => {
    //confirmPicked(chosenFood, userInputtedName);
    closeUpdateMenu();
  };  

  return (
    <div>
      <main className="createPage--container">
        <Header event={goto} headerButtonTitle="Home" />
        <div className="createPage__titleArea--container">
            <h1 className="createPage__pageTitle--style">{pageTitle}</h1>
            <span className="createPage__pageDate--style">{pageDate}</span>
        </div>
        <div className="createPage__main--container">
            {currentWizard === 1 && 
                <EventWizard
                    isVisible={showModal}
                    eventWizardTitle="Short Title for the Event"
                    eventWizardData={currentWizardData}
                    getWizardData={setCurrentWizardData}
                    confirmWizrdData={confirmWizard}
                    closeWizardData={cancelWizard}
                />
            }
            {currentWizard === 2 && 
                <EventWizard
                    isVisible={showModal}
                    eventWizardTitle="What is the Event's Date"
                    eventWizardData={currentWizardData}
                    getWizardData={setCurrentWizardData}
                    confirmWizrdData={confirmWizard}
                    closeWizardData={cancelWizard}
                />
            }
            {currentWizard >= 3 && 
                <EventWizard
                    isVisible={showModal}
                    eventWizardTitle="Requested Menu Item"
                    eventWizardData={currentWizardData}
                    getWizardData={setCurrentWizardData}
                    confirmWizrdData={confirmWizard}
                    closeWizardData={finishedWizard}
                    isDone = {true}
                />
            } 
            {currentWizard === "final" &&
                <div className="createPage__main--container">
                    <section className="planningPage__menu--container">
                        <Menu headerTitle="Menu" >
                        {newEvent.menu.map((item, index) => {
                            return (
                            <div key={index}>
                                {item.asignee === "none" && (
                                <LineItem
                                    leftContent={item.food}
                                    hasButton="true"
                                    buttonTitle="Designate"
                                    buttonEvent={() => openUpdateMenu(item.food)}
                                />
                                )}
                                {item.asignee !== "none" && (
                                <LineItem
                                    leftContent={item.food}
                                    rightContent={item.asignee}
                                />
                                )}
                            </div>
                            );
                        })}
                        </Menu>
                    </section>
                    <section className="planningPage__popularItems--container">
                        <Pillbox
                        headerTitle="Pick a Popular Item"
                        buttonTitle="Write in your meal"
                        showButton="true"
                        >
                            View dozens of popular food items with pictures, images, and
                            recipes.
                        </Pillbox>
                        {/* <UpdateMenu
                            isVisible={showModal}
                            closeUpdateMenu={closeUpdateMenu}
                            prepickedFood={chosenFood}
                            inputName = {userInputtedName}
                            inputFoodEvent={setChosenFood}
                            inputNameEvent={setUserInputtedName}
                            confirmEvent={() => {
                                confirmUpdateMenu();
                            }}
                        />                         */}
                    </section>
                </div>
            } 
            </div>          
      </main>
    </div>
  );
};

export default CreatePage;
