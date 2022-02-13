import "./planningPage.css";
import Header from "../../components/Header/header";
import Pillbox from "../../components/Pillbox/Pillbox";
import LineItem from "../../components/LineItem/LineItem";
import Menu from "../../components/Menu/Menu";

const PlanningPage = ({goto, event}) => {
    console.log(event);
    return(
        <div>
            <main className="planningPage--container">
                <Header event={goto} headerButtonTitle="Home" />
                <h1 className="planning__pageTitle--style">{event.EventTitle}</h1>
                <div className="planningPage__main--container">
                    <section className="planningPage__menu--container">
                        <Menu 
                            headerTitle="Menu"
                            buttonColor="light"
                            buttonTitle="Write in your meal"
                            showButton= "true"                            
                        >
                            {event.menu.map((item, index) => {
                                return(
                                    <>
                                        {item.asignee === 'none' &&
                                            <LineItem leftContent={item.food} hasButton="true" buttonTitle="I want this" />
                                        }
                                        {item.asignee !== 'none' &&
                                            <LineItem leftContent={item.food} rightContent={item.asignee} />
                                        }
                                    </>
                                );
                            })
                            }
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