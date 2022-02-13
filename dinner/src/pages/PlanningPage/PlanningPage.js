import "./planningPage.css";
import Header from "../../components/Header/header";
import Pillbox from "../../components/Pillbox/Pillbox";
import LineItem from "../../components/LineItem/LineItem";
import Menu from "../../components/Menu/Menu";
import React, {useState} from 'react';

const PlanningPage = ({goto, event}) => {
    /**
     * Add event data to component state via useEffect
     * Create function that calls new component UpdateMenu
     * Component UpdateMenu takes in the "food item" or allow write in, user input "name"
     * It has a function that update the planning page's menu
     * 
     */

    const [eventData, setEventData] = useState(event);

    return(
        <div>
            <main className="planningPage--container">
                <Header event={goto} headerButtonTitle="Home" />
                <h1 className="planning__pageTitle--style">{eventData.EventTitle}</h1>
                <div className="planningPage__main--container">
                    <section className="planningPage__menu--container">
                        <Menu 
                            headerTitle="Menu"
                            buttonColor="light"
                            buttonTitle="Write in your meal"
                            showButton= "true"                            
                        >
                            {eventData.menu.map((item, index) => {
                                return(
                                    <div key={index}>
                                        {item.asignee === 'none' &&
                                            <LineItem leftContent={item.food} hasButton="true" buttonTitle="I want this" />
                                        }
                                        {item.asignee !== 'none' &&
                                            <LineItem leftContent={item.food} rightContent={item.asignee} />
                                        }
                                    </div>
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