import heart from "../../images/heart-1.png";
import chef from "../../images/chef-plain.png";
import "./pillbox.css"

const Pillbox = ({imageType, headerTitle, children, buttonColor, buttonTitle, showButton}) => {
    return(
        <div className="pillbox--container">
            <div className="pillbox__header--style">
                <h2>{headerTitle}</h2>
                <img src={imageType==="heart"?heart:chef} className="img--style" alt="" />
            </div>
            {showButton==="true" &&
                <button type="button" className={`pillbox__button--style ${buttonColor==='light'?'lightGreen':'darkGreen'}`}>
                    {buttonTitle}
                </button>
            }
           <p className="pillbox__text--style">{children}</p>
           
        </div>
    );
}

export default Pillbox;