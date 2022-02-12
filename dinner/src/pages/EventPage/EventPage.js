import "./eventPage.css";
import Header from "../../components/Header/header";

const EventPage = () => {
    return(
        <div>
            <main className="eventPage--container">
                <Header  />
                <div className="eventPage__main--container">
                    <section className="code">Event Code</section>
                    <section className="events">Upcoming</section>
                    <section className="create">Create Event</section>
                </div>
            </main>
        </div>
    );
}

export default EventPage;