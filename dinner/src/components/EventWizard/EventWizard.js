import './eventWizard.css';
import "../UpdateMenu/updateMenu.css";

const EventWizard = ({isVisible, eventWizardTitle, eventWizardData, getWizardData, confirmWizrdData, closeWizardData, isDone = false}) => {
    return(
        <section className={`eventWizard--container ${isVisible?'':'hide'}`}>   
            <h2 className="eventWizard__title--style">{eventWizardTitle}</h2>
            {eventWizardTitle !== "What is the Event's Date" &&
                <input type="text" value={eventWizardData} className="pillbox__input--style" onChange={(e) => {getWizardData(e.target.value)}} />
            }
            {eventWizardTitle === "What is the Event's Date" &&
                <input type="date" value={eventWizardData} className="pillbox__input--style" onChange={(e) => {getWizardData(e.target.value)}} />
            }
            <button type="button" onClick={()=> {confirmWizrdData()}} className="updateMenu__button--style confirmButton--style">
                    Confirm
            </button>
            {isDone === false &&
                <button type="button" onClick={()=> {closeWizardData()}} className="updateMenu__button--style cancelButton--style">
                        Cancel
                </button>
            }
            {isDone === true &&
                <button type="button" onClick={()=> {closeWizardData()}} className="updateMenu__button--style cancelButton--style">
                        Done
                </button>
            }            
        </section>
    );
}

export default EventWizard;