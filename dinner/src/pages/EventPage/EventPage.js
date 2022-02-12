import "./eventPage.css";
import "../../App.css";
import Header from "../../components/Header/header";
import Pillbox  from "../../components/Pillbox/Pillbox";
import LineItem from "../../components/LineItem/LineItem";
import React, {useState, useEffect} from 'react';

const EventPage = ({goto, joinPlanning}) => {
    const [foodEvents, setFoodEvents] = useState([]);
    const [joinCode, setJoinCode] = useState("");

    useEffect(()=> {
        updateData();
    }, [])

    const updateData = () => {        
        fetch("../../data/eventData.json")
            .then((response) => response.json())
            .then((data) => {
                setFoodEvents(data)
        });
    };

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
                                foodEvents.map((event, index) => {
                                    return(
                                        <LineItem key={index} leftContent={event.EventTitle} rightContent={event.EventDate} />
                                    ) 
                                })
                            }      
                        </Pillbox>                        
                    </section>
                    <section className="code">
                        <Pillbox imageType="chef" headerTitle="Enter the Event Code" buttonTitle="Join" showButton="true" buttonEvent={()=>{joinPlanning(joinCode)}} showInput="true" inputEvent={setJoinCode}>
                            This is the group code shared by the primary organizer!!!
                        </Pillbox>
                    </section>
                    <section className="create">                        
                        <Pillbox imageType="chef" headerTitle="Create an Event" buttonTitle="Create" showButton="true">
                            Let's plan the What, When, & Where. At the end, a code will generate to be share with others.
                        </Pillbox>
                    </section>
                </div>
            </main>
        </div>
    );
}

export default EventPage;