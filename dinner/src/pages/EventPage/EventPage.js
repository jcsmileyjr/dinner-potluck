import "./eventPage.css";
import "../../App.css";
import Header from "../../components/Header/header";
import Pillbox  from "../../components/Pillbox/Pillbox";
import LineItem from "../../components/LineItem/LineItem";
import HiddenLink from "../../components/HiddenLink/HiddenLink";
import React, {useState} from 'react';
import howToCreateEvent from "../../images/CC-demo.gif";
import howToCreateMobile from "../../images/CC-demo-mobile.gif";

const EventPage = ({goto, gotoCreatePage, joinPlanning, eventInputError, eventData}) => {
    const [foodEvents, setFoodEvents] = useState(eventData);
    const [joinCode, setJoinCode] = useState("");
    const [showCreateEvent, setShowCreateEvent] = useState(false);

    const showHowToVideo = () => {
        setShowCreateEvent(prevCheck => !prevCheck);
    }

    return(
        <div>
            <main className="eventPage--container">
                <Header event={goto} headerButtonTitle="Home" />
                <div className="eventPage__main--container">
                    <section className="events">
                        <Pillbox imageType="heart" headerTitle="Upcoming Events" showButton="false">
                            {foodEvents.length > 0 &&
                                <div>{
                                    foodEvents.map((event, index) => {
                                        return(
                                            <HiddenLink key={index} showPlanningPage={()=> joinPlanning(event.code)}>
                                                <LineItem  leftContent={event.EventTitle} rightContent={event.EventDate} />
                                            </HiddenLink>
                                        ) 
                                    })
                                }
                                    <p className="greenColor">Click an event for more details</p>
                                </div>
                            }      
                            {foodEvents.length >= 1 &&
                                <p>No events found. Will update on your next visit after you join a group or create an event.</p>
                            }                            
                        </Pillbox>                        
                    </section>
                    <section className="code">
                        <Pillbox imageType="chef" headerTitle="Enter the Event Code" buttonTitle="Join" showButton="true" buttonEvent={()=>{joinPlanning(joinCode)}} showInput="true" inputEvent={setJoinCode} showInputError={eventInputError} inputErrorMessage="Incorrect event code. Please check with your event's organizer for the correct code.">
                            This is the group code shared by the primary organizer!!!
                            <p className="exampleMessage">"Example Potluck" code is 123</p>
                        </Pillbox>
                    </section>
                    <section className="create">                        
                        <Pillbox imageType="chef" headerTitle="Create an Event" buttonTitle="Create" showButton="true" buttonEvent={()=> {gotoCreatePage()}}>
                            Let's plan the What, When, & Where. At the end, a code will generate to be share with others.
                        </Pillbox>
                    </section>
                    <div onClick={() => {showHowToVideo()}} className={`video ${showCreateEvent?"enlarge":""}`}>
                        <div className={`${showCreateEvent?"hideExtraLabels":""}`}>
                            <h2 className="bottomcontent__title--style">How to Create an Event</h2>
                        </div>
                        <p className="bottomcontent__instructions--style">Click to enlarge or Close</p>
                        {showCreateEvent &&
                            <img className={`bottomcontent__createEvent--style ${showCreateEvent?"enlargeVideo":""}`} src={howToCreateMobile} alt="" />
                        }
                        {showCreateEvent === false &&
                            <img className={`bottomcontent__createEvent--style ${showCreateEvent?"enlargeVideo":""}`} src={howToCreateEvent} alt="" />
                        }
                    </div>
                </div>
            </main>
        </div>
    );
}

export default EventPage;