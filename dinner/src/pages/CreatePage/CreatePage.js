import "./createPage.css";
import React, { useState } from "react";
import Header from "../../components/Header/header";
import EventWizard from "../../components/EventWizard/EventWizard";
import Menu from "../../components/Menu/Menu";
import Pillbox from "../../components/Pillbox/Pillbox";
import LineItem from "../../components/LineItem/LineItem";
import UpdateMenu from "../../components/UpdateMenu/UpdateMenu";
import { nanoid } from "nanoid";
import Copy from "../../images/copy.png";

const CreatePage = ({ goto, gotoEventPage, createEvent }) => {
  const [showModal, setShowModal] = useState(true);
  const [showDesignateModal, setDesignateModal] = useState(false);
  const [chosenFood, setChosenFood] = useState("");
  const [userInputtedName, setUserInputtedName] = useState("");
  const [currentWizardData, setCurrentWizardData] = useState("");
  const [currentWizard, setCurrentWizard] = useState(1);
  const [newEvent, setNewEvent] = useState({ menu: [] });
  const [pageTitle, setPageTitle] = useState("Create an Event");
  const [pageDate, setPageDate] = useState("None");
  const [disabledDone, setEnableDone] = useState(true);
  let pass = true;

  const convertDate = (date) => {
    let year = date.slice(0, 4);
    let day = date.slice(5, 7);
    let month = date.slice(-2);
    return `${trimZero(day)}-${trimZero(month)}-${year}`;
  };

  const trimZero = (time) => {
    if (time.charAt(0) === "0") {
      return time.slice(1);
    } else {
      return time;
    }
  };

  const confirmWizard = () => {
    let wizardEvent = newEvent;
    if (currentWizard === 1) {
      setPageTitle(currentWizardData);
      wizardEvent.EventTitle = currentWizardData;
      setNewEvent((newEvent) => ({
        ...newEvent,
        ...wizardEvent,
      }));
      setCurrentWizard((prevCurrent) => prevCurrent + 1);
    }
    if (currentWizard === 2) {
      setPageDate(convertDate(currentWizardData));
      wizardEvent.EventDate = convertDate(currentWizardData);
      setNewEvent((newEvent) => ({
        ...newEvent,
        ...wizardEvent,
      }));
      setCurrentWizard((prevCurrent) => prevCurrent + 1);
    }

    if (currentWizard >= 3) {
      const menuItem = {
        food: currentWizardData,
        asignee: "none",
        _key: nanoid(),
      };
      wizardEvent.menu.push(menuItem);
      setNewEvent((newEvent) => ({
        ...newEvent,
        ...wizardEvent,
      }));
      setCurrentWizard((prevCurrent) => prevCurrent + 1);
    }
    setEnableDone(true);
    setCurrentWizardData("");
  };

  const cancelWizard = () => {
    setShowModal(false);
    gotoEventPage();
  };

  const finishedWizard = () => {
    let wizardEvent = newEvent;
    wizardEvent.code = nanoid();
    if (currentWizardData !== "") {
      const menuItem = {
        food: currentWizardData,
        asignee: "none",
        _key: nanoid(),
      };
      wizardEvent.menu.push(menuItem);
      setNewEvent((newEvent) => ({
        ...newEvent,
        ...wizardEvent,
      }));
    }

    setShowModal(false);
    setCurrentWizard("final");
  };

  const openUpdateMenu = (foodItem) => {
    setDesignateModal(true);
    setChosenFood(foodItem);
    setUserInputtedName("");
  };

  const closeUpdateMenu = () => {
    setDesignateModal(false);
    setUserInputtedName("");
  };

  // Function to update event's menu food by person name
  const designatePerson = () => {
    if (userInputtedName === "") {
      newEvent.menu.forEach((item) => {
        if (item.food === chosenFood) {
          item.asignee = "none";
        }
      });
      closeUpdateMenu();
      return;
    }
    newEvent.menu.forEach((item) => {
      if (item.food === chosenFood) {
        item.asignee = userInputtedName;
      }
    });
    closeUpdateMenu();
  };

  const copyText = () => {
    navigator.clipboard.writeText(newEvent.code);
  };

  const ifEnableDone = (value) => {
    if (value !== "") {
      setEnableDone(false);
    }else{
      setEnableDone(true);
    }
  };

  return (
    <div>
      <main
        className={`createPage--container ${
          showDesignateModal ? "hidePage" : ""
        }`}
      >
        <Header event={goto} headerButtonTitle="Home" />
        <div className="createPage__titleArea--container">
          <h1 className="createPage__pageTitle--style">{pageTitle}</h1>
          <span className="createPage__pageDate--style">{pageDate}</span>
        </div>
        <div className="createPage__main--container">
          {currentWizard === 1 && (
            <EventWizard
              isVisible={showModal}
              eventWizardTitle="Short Title for the Event"
              eventWizardData={currentWizardData}
              getWizardData={setCurrentWizardData}
              confirmWizrdData={confirmWizard}
              closeWizardData={cancelWizard}
              enableDone={disabledDone}
              inputNotEmpty={ifEnableDone}
            />
          )}
          {currentWizard === 2 && (
            <EventWizard
              isVisible={showModal}
              eventWizardTitle="What is the Event's Date"
              eventWizardData={currentWizardData}
              getWizardData={setCurrentWizardData}
              confirmWizrdData={confirmWizard}
              closeWizardData={cancelWizard}
              enableDone={disabledDone}
              inputNotEmpty={ifEnableDone}
            />
          )}
          {currentWizard >= 3 && (
            <EventWizard
              isVisible={showModal}
              eventWizardTitle="Requested Menu Item"
              eventWizardData={currentWizardData}
              getWizardData={setCurrentWizardData}
              confirmWizrdData={confirmWizard}
              closeWizardData={finishedWizard}
              isDone={true}
              enableDone={disabledDone}
              inputNotEmpty={ifEnableDone}
              displayData= {newEvent}
            />
          )}
          {currentWizard === "final" && (
            <div className="createPage__main--container">
              <section className="planningPage__menu--container">
                <Menu headerTitle="Menu">
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
                  buttonTitle="Search Database"
                  showButton="true"
                >
                  View dozens of popular food items with pictures, images, and
                  recipes.
                  <p className="underConstruction">Under Construction!!!!</p>
                </Pillbox>
                <Pillbox
                  headerTitle="Group Code"
                  buttonTitle="Done"
                  showButton="true"
                  buttonEvent={() => createEvent(newEvent, pass)}
                >
                  <p
                    onClick={() => {
                      copyText();
                    }}
                    className="createPage__code--style"
                  >
                    {newEvent.code}{" "}
                    <img src={Copy} className="copy__image--style" alt="" />
                  </p>
                  Please share this code. This allow anyone to use the app to
                  add to the menu.
                </Pillbox>
              </section>
            </div>
          )}
        </div>
      </main>
      <UpdateMenu
        isVisible={showDesignateModal}
        closeUpdateMenu={closeUpdateMenu}
        prepickedFood={chosenFood}
        inputName={userInputtedName}
        inputFoodEvent={setChosenFood}
        inputNameEvent={setUserInputtedName}
        confirmEvent={() => {
          designatePerson();
        }}
      />
    </div>
  );
};

export default CreatePage;
