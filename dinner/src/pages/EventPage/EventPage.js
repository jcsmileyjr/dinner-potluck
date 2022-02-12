import "./eventPage.css";
import "../../App.css";
import Header from "../../components/Header/header";
import heart from "../../images/heart-1.png";
import chef from "../../images/chef-plain.png";


const EventPage = () => {
    return(
        <div>
            <main className="eventPage--container">
                <Header  />
                <div className="eventPage__main--container">
                    <section className="events pillbox--container">
                        <div className="pillbox__header--style">
                            <h2>Upcoming Events</h2>
                            <img src={heart} className="img--style" alt="" />
                        </div>
                        <div className="events__content--container">
                            <span>Smiley's Brunch</span><span>2/2</span>
                        </div>
                    </section>
                    <section className="code pillbox--container">
                        <div className="pillbox__header--style">
                            <h2>Enter the Event Code</h2>
                            <img src={chef} className="img--style" alt="" />
                        </div>
                    </section>
                    <section className="create pillbox--container">
                        <div className="pillbox__header--style">
                            <h2>Create an Event</h2>
                            <img src={chef} className="img--style" alt="" />
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}

export default EventPage;