import heart from "../../images/heart-1.png";
import chef from "../../images/chef-plain.png";
import "./pillbox.css"

const Pillbox = ({imageType, headerTitle, children, buttonColor, buttonTitle, buttonEvent, showButton, showInput, inputEvent, showInputError, inputErrorMessage}) => {
    return(
        <div className="pillbox--container">
            <div className="pillbox__header--style">
                <h2 className="">{headerTitle}</h2>
                <img src={imageType==="heart"?heart:chef} className="img--style" alt="" />
            </div>
            {showInput==='true' &&
                <>
                    <input type="text" className="pillbox__input--style" onChange={(e) => {inputEvent(e.target.value)}} />
                    {showInputError && <p className="pillbox__error--style">{inputErrorMessage}</p> }
                </>
            }
            {showButton==="true" &&
                <button type="button" onClick={()=> {buttonEvent()}} className={`pillbox__button--style ${buttonColor==='light'?'lightGreen':'darkGreen'}`}>
                    {buttonTitle}
                </button>
            }
           <div className="pillbox__text--style">{children}</div>
           
        </div>
    );
}

export default Pillbox;