import "./planningPage.css";
import Header from "../../components/Header/header";
import Footer from "../../components/Footer/Footer";
import Pillbox from "../../components/Pillbox/Pillbox";
import LineItem from "../../components/LineItem/LineItem";
import Menu from "../../components/Menu/Menu";
import UpdateMenu from "../../components/UpdateMenu/UpdateMenu";
import React, { useState } from "react";
import Copy from "../../images/copy.png";

const PlanningPage = ({ goto, event, confirmPicked }) => {
  //const [eventData, setEventData] = useState(event);
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

  const copyText = () => {
    navigator.clipboard.writeText(event.code);
  }

  return (
    <div>
      <main className={`planningPage--container ${showModal?'hidePage':''}`}>
        <Header />
        <div className="planning__pageTitle--container">
          <h1 className="planning__pageTitle--style">{event.EventTitle}</h1>
          <div className="planning__pageCode--style" onClick={()=> {copyText()}}>
            <span className="newline">Event Code: <img src={Copy} className="copy__image--style" alt="" /></span>
            <span className="newline">{event.code}</span>
          </div>
        </div>
        <div className="display--while--mobile">
          <Footer event={goto} headerButtonTitle="Done" />
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
              {event.menu.map((item, index) => {
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
        <div className="display--while--desktop">
          <Footer event={goto} headerButtonTitle="Done" />
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
