import Header from "../../components/header";
import food from "../../images/food.jpg";
import calendar from "../../images/calendar-date-green-1.png";
import "./landingPage.css";

const landingPage = () => {
    return(
        <div>
            <main>
                <Header />
                <section className="landingPage__topContent--container">
                    <img src={food} className="image__food--style" alt="" />
                    <div className="topContent__content--container">
                        <p className="topContent__content--style">
                        An app to crowdsource planning large multifamily meals.
                        </p>
                        <p className="topContent__content--style">
                        Get away from 50 phone calls, text messages and pings to learn who is bringing which meal. There's an app for that now. 
                        </p>
                    </div>
                </section>
                <div className="landingPage__bottomContent--container">
                    <section className="bottomContent__leftBox--container">
                        <img src={calendar} className="image__calendar--style" alt="" />
                        <div className="bottomContent__leftContent--container">
                            <p>content</p>
                        </div>
                    </section>
                    <section className="bottomContent__rightBox--container">
                        <h2>Menu</h2>
                        <div className="bottomcontent__rightContent--container">
                            <div className="rightContent__menuFood--container">
                                <p></p>
                                <p></p>
                                <p></p>
                                <p></p>
                            </div>
                            <div className="rightContent__menuName--container">
                                <p></p>
                                <p></p>
                                <p></p>
                                <p></p>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}

export default landingPage;