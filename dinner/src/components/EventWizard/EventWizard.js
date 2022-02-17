import './eventWizard.css';
import "../UpdateMenu/updateMenu.css";

const EventWizard = ({isVisible, eventWizardTitle, eventWizardData, getWizardData, confirmWizrdData, closeWizardData}) => {
    return(
        <section className={`eventWizard--container ${isVisible?'':'hide'}`}>   
            <h2 className="eventWizard__title--style">{eventWizardTitle}</h2>
            <input type="text" value={eventWizardData} className="pillbox__input--style" onChange={(e) => {getWizardData(e.target.value)}} />
            <button type="button" onClick={()=> {confirmWizrdData()}} className="updateMenu__button--style confirmButton--style">
                    Confirm
            </button>
            <button type="button" onClick={()=> {closeWizardData()}} className="updateMenu__button--style cancelButton--style">
                    Cancel
            </button>
        </section>
    );
}

export default EventWizard;