import "./eventPage.css";
import "../../App.css";
import Header from "../../components/Header/header";
import Pillbox  from "../../components/Pillbox/Pillbox";
import LineItem from "../../components/LineItem/LineItem";
import HiddenLink from "../../components/HiddenLink/HiddenLink";
import React, {useState} from 'react';

const EventPage = ({goto, gotoCreatePage, joinPlanning, eventInputError, eventData}) => {
    const [foodEvents, setFoodEvents] = useState(eventData);
    const [joinCode, setJoinCode] = useState("");

    return(
        <div>
            <main className="eventPage--container">
                <Header event={goto} headerButtonTitle="Home" />
                <div className="eventPage__main--container">
                    <section className="events">
                        <Pillbox imageType="heart" headerTitle="Upcoming Events" showButton="false">
                            {foodEvents.length === 0 &&
                                <p>No events found. Will update on your next visit after you join a group or create an event.</p>
                            }                            
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
                        </Pillbox>                        
                    </section>
                    <section className="code">
                        <Pillbox imageType="chef" headerTitle="Enter the Event Code" buttonTitle="Join" showButton="true" buttonEvent={()=>{joinPlanning(joinCode)}} showInput="true" inputEvent={setJoinCode} showInputError={eventInputError} inputErrorMessage="Incorrect event code. Please check with your event's organizer for the correct code.">
                            This is the group code shared by the primary organizer!!!
                        </Pillbox>
                    </section>
                    <section className="create">                        
                        <Pillbox imageType="chef" headerTitle="Create an Event" buttonTitle="Create" showButton="true" buttonEvent={()=> {gotoCreatePage()}}>
                            Let's plan the What, When, & Where. At the end, a code will generate to be share with others.
                        </Pillbox>
                    </section>
                </div>
            </main>
        </div>
    );
}

export default EventPage;