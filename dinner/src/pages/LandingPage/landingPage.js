import Header from "../../components/Header/header";
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
                            <p>The family that stress less <span className="wrapText">Loves more</span>!!!</p>
                        </div>
                    </section>
                    <section className="bottomContent__rightBox--container">
                        <div className="bottomcontent__rightContent--container">
                            <h3>Menu</h3>
                            <div className="rightContent__innnerDiv--container">
                                <div className="rightContent__menuFood--container">
                                    <p>Fried Chicken</p>
                                    <p>Spaghetii</p>
                                    <p>Fried Fish</p>
                                    <p>Drinks</p>
                                </div>
                                <div className="rightContent__menuName--container">
                                    <p>Emma Jackson</p>
                                    <p>Little Ricky</p>
                                    <p>Janet Henderson</p>
                                    <p>TJ</p>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </main>
        </div>
    );
}

export default landingPage;