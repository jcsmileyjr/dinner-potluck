import './eventWizard.css';
import "../UpdateMenu/updateMenu.css";

const EventWizard = ({isVisible, eventWizardTitle, eventWizardData, getWizardData, confirmWizrdData, closeWizardData, isDone = false, enableDone = true, inputNotEmpty, displayData}) => {
    return(
        <section className={`eventWizard--container ${isVisible?'':'hide'}`}>   
            <h2 className="eventWizard__title--style">{eventWizardTitle}</h2>
            {eventWizardTitle !== "What is the Event's Date" &&
                <input type="text" maxLength="30" value={eventWizardData} className="pillbox__input--style" onChange={(e) => {getWizardData(e.target.value); inputNotEmpty(e.target.value);}} />
            }
            {eventWizardTitle === "What is the Event's Date" &&
                <input type="date" value={eventWizardData} className="pillbox__input--style" onChange={(e) => {getWizardData(e.target.value); inputNotEmpty(e.target.value);}} />
            }
            {isDone === false &&
                <div>
                    <button disabled={enableDone} type="button" onClick={()=> {confirmWizrdData()}} className="updateMenu__button--style confirmButton--style">
                            Confirm
                    </button>
                    <button type="button" onClick={()=> {closeWizardData()}} className="updateMenu__button--style cancelButton--style">
                            Cancel
                    </button>
                </div>
            }
            {isDone === true &&
                <div className='updateMenu__showMenu--container'>
                    <button disabled={enableDone} type="button" onClick={()=> {confirmWizrdData()}} className="updateMenu__button--style confirmButton--style">
                        Add Another Item
                    </button>
                    <button disabled={enableDone} type="button" onClick={()=> {closeWizardData()}} className="updateMenu__button--style cancelButton--style">
                            Done
                    </button>
                    <p className='showMenu__title--style'>Current Menu Items</p>
                    {displayData.menu.map((item, index) => {
                        return(
                            <div className='showMenu__foodTitles--style' key={index}>{item.food} </div>
                        )
                    })

                    }
                </div>
            }            
        </section>
    );
}

export default EventWizard;