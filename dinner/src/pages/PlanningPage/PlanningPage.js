import "./planningPage.css";
import Header from "../../components/Header/header";
import Pillbox from "../../components/Pillbox/Pillbox";
import LineItem from "../../components/LineItem/LineItem";
import Menu from "../../components/Menu/Menu";
import UpdateMenu from "../../components/UpdateMenu/UpdateMenu";
import React, { useState } from "react";

const PlanningPage = ({ goto, event, confirmPicked }) => {
  const [eventData, setEventData] = useState(event);
  const [showModal, setShowModal] = useState(false);
  const [chosenFood, setChosenFood] = useState("");
  const [userInputtedName, setUserInputtedName] = useState("");

  const openUpdateMenu = (foodItem) => {
    setShowModal(true);
    setChosenFood(foodItem);
    setUserInputtedName("");
  };

  const closeUpdateMenu = () => {
    setShowModal(false);
    setUserInputtedName("");
  };

  const confirmUpdateMenu = () => {
    confirmPicked(chosenFood, userInputtedName);
    closeUpdateMenu();
  };

  return (
    <div>
      <main className={`planningPage--container ${showModal?'hidePage':''}`}>
        <Header event={goto} headerButtonTitle="Done" />
        <div className="planning__pageTitle--container">
          <h1 className="planning__pageTitle--style">{eventData.EventTitle}</h1>
          <span className="planning__pageCode--style">Event Code: {eventData.code}</span>
        </div>
        <div className="planningPage__main--container">
          <section className="planningPage__menu--container">
            <Menu
              headerTitle="Menu"
              buttonColor="light"
              buttonTitle="Write in your meal"
              showButton="true"
              buttonEvent={() => openUpdateMenu("")}
            >
              {eventData.menu.map((item, index) => {
                return (
                  <div key={index}>
                    {item.asignee === "none" && (
                      <LineItem
                        leftContent={item.food}
                        hasButton="true"
                        buttonTitle="I want this"
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
            <div className="planningPage__warning--container">
              <p>When finished, please click the "Done" button to save changes!!!</p>
            </div>
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
          </section>
        </div>
      </main>
      <UpdateMenu
              isVisible={showModal}
              closeUpdateMenu={closeUpdateMenu}
              prepickedFood={chosenFood}
              inputName = {userInputtedName}
              inputFoodEvent={setChosenFood}
              inputNameEvent={setUserInputtedName}
              confirmEvent={() => {
                confirmUpdateMenu();
              }}
      />
    </div>
  );
};

export default PlanningPage;
