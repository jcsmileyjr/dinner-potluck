import "./updateMenu.css";
import "../Pillbox/pillbox.css";
import heart from "../../images/heart-1.png";

const UpdateMenu = ({inputEvent, buttonEvent}) => {
    return(
        <section className="updateMenu--container">            
            <div className="updateMenu__input--container">
                <div className="updateMenu__header--style">
                    <h2 className="">What is your Name</h2>
                    <img src={heart} className="img--style" alt="" />
                </div>
                <input type="text" className="pillbox__input--style" onChange={(e) => {inputEvent(e.target.value)}} />
            </div>
            <div className="updateMenu__input--container">
                <div className="updateMenu__header--style">
                    <h2 className="">What are you Bringing</h2>
                    <img src={heart} className="img--style" alt="" />
                </div>
                <input type="text" className="pillbox__input--style" onChange={(e) => {inputEvent(e.target.value)}} />
            </div>
            <button type="button" onClick={()=> {buttonEvent()}} className="updateMenu__button--style confirmButton--style">
                    Confirm
            </button>
            <button type="button" onClick={()=> {buttonEvent()}} className="updateMenu__button--style cancelButton--style">
                    Cancel
            </button>
        </section>
    );
}

export default UpdateMenu;