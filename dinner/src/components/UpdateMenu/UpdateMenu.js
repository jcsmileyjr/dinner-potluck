import "./updateMenu.css";
import "../Pillbox/pillbox.css";
import heart from "../../images/heart-1.png";

const UpdateMenu = ({inputNameEvent, inputName,inputFoodEvent, confirmEvent, closeUpdateMenu, isVisible= false, prepickedFood}) => {

    return(
        <section className={`updateMenu--container ${isVisible?'':'hide'}`}>            
            <div className="updateMenu__input--container">
                <div className="updateMenu__header--style">
                    <h2 className="">What is your Name</h2>
                    <img src={heart} className="img--style" alt="" />
                </div>
                <input name="personName"  type="text" value={inputName} className="pillbox__input--style" onChange={(e) => {inputNameEvent(e.target.value)}} />
            </div>
            <div className="updateMenu__input--container">
                <div className="updateMenu__header--style">
                    <h2 className="">What are you Bringing</h2>
                    <img src={heart} className="img--style" alt="" />
                </div>
                <input name="foodName" type="text" value={prepickedFood} className="pillbox__input--style" onChange={(e) => {inputFoodEvent(e.target.value)}} />
            </div>
            <button type="button" onClick={()=> {confirmEvent()}} className="updateMenu__button--style confirmButton--style">
                    Confirm
            </button>
            <button type="button" onClick={()=> {closeUpdateMenu()}} className="updateMenu__button--style cancelButton--style">
                    Cancel
            </button>
        </section>
    );
}

export default UpdateMenu;