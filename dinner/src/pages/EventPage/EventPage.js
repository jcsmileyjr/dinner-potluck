import "./eventPage.css";
import "../../App.css";
import Header from "../../components/Header/header";
import Pillbox  from "../../components/Pillbox/Pillbox";
import LineItem from "../../components/LineItem/LineItem";

const EventPage = () => {
    return(
        <div>
            <main className="eventPage--container">
                <Header  />
                <div className="eventPage__main--container">
                    <section className="events">
                        <Pillbox imageType="heart" headerTitle="Upcoming Events" showButton="false">
                            <LineItem leftContent="Smiley's Brunch" rightContent="2/2" />
                            <LineItem leftContent="Neighborhood Picnic" rightContent="3/1" />
                            <LineItem leftContent="Company Grill" rightContent="3/15" />
                        </Pillbox>                        
                    </section>
                    <section className="code">
                        <Pillbox imageType="chef" headerTitle="Enter the Event Code" buttonTitle="Join" showButton="true" showInput="true">
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