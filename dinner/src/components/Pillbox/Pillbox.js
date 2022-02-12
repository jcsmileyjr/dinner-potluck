import heart from "../../images/heart-1.png";
import chef from "../../images/chef-plain.png";
import "./pillbox.css"

const Pillbox = ({imageType, headerTitle, children, buttonColor, buttonTitle, showButton}) => {
    return(
        <div className="pillbox--container">
            <div className="pillbox__header--style">
                <h2 className="">{headerTitle}</h2>
                <img src={imageType==="heart"?heart:chef} className="img--style" alt="" />
            </div>
            <input type="text" className="pillbox__input--style" />
            {showButton==="true" &&
                <button type="button" className={`pillbox__button--style ${buttonColor==='light'?'lightGreen':'darkGreen'}`}>
                    {buttonTitle}
                </button>
            }
           <div className="pillbox__text--style">{children}</div>
           
        </div>
    );
}

export default Pillbox;