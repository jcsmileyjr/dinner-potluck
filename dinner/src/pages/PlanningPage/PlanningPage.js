import "./planningPage.css";
import Header from "../../components/Header/header";
import Pillbox from "../../components/Pillbox/Pillbox";
import LineItem from "../../components/LineItem/LineItem";
import Menu from "../../components/Menu/Menu";

const PlanningPage = ({goto}) => {
    return(
        <div>
            <main className="planningPage--container">
                <Header event={goto} headerButtonTitle="Home" />
                <h1 className="planning__pageTitle--style">Smiley's Brunch</h1>
                <div className="planningPage__main--container">
                    <section className="planningPage__menu--container">
                        <Menu 
                            headerTitle="Menu"
                            buttonColor="light"
                            buttonTitle="Write in your meal"
                            showButton= "true"                            
                        >
                            <LineItem leftContent="Fried Chicken" rightContent="Emma Jackason" />
                            <LineItem leftContent="Spaghetti" rightContent="Little Ricky" />
                            <LineItem leftContent="Fried Fish" rightContent="Janet Henderson" />
                            <LineItem leftContent="Drinks" rightContent="TJ" />
                            <LineItem leftContent="Salad" hasButton="true" buttonTitle="I want this" />
                        </Menu>
                    </section>
                    <section className="planningPage__popularItems--container">
                        <Pillbox 
                                headerTitle="Pick a Popular Item"
                                buttonTitle="Write in your meal"
                                showButton= "true"                            
                        >
                            View dozens of popular food items with pictures, images, and recipes. 
                        </Pillbox>
                    </section>
                </div>
            </main>
        </div>
    );
}

export default PlanningPage;