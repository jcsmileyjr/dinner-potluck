import "./eventPage.css";
import "../../App.css";
import Header from "../../components/Header/header";
import heart from "../../images/heart-1.png";
import chef from "../../images/chef-plain.png";
import Pillbox  from "../../components/Pillbox/Pillbox";

const EventPage = () => {
    return(
        <div>
            <main className="eventPage--container">
                <Header  />
                <div className="eventPage__main--container">
                    <section className="events">
                        <Pillbox imageType="heart" headerTitle="Upcoming Events" showButton="false">
                            <div className="events__content--container">
                                <span>Smiley's Brunch</span><span>2/2</span>
                            </div>
                        </Pillbox>                        
                    </section>
                    <section className="code">
                        <Pillbox imageType="chef" headerTitle="Enter the Event Code" buttonColor='dark' buttonTitle="Join" showButton="true">
                            This is the group code shared by the primary organizer!!!
                        </Pillbox>
                    </section>
                    <section className="create">                        
                        <Pillbox imageType="chef" headerTitle="Create an Event" buttonColor='dark' buttonTitle="Create" showButton="true">
                            Let's plan the What, When, & Where. At the end, a code will generate to be share with others.
                        </Pillbox>
                    </section>
                </div>
            </main>
        </div>
    );
}

export default EventPage;