import heart from "../../images/heart-1.png";
import chef from "../../images/chef-plain.png";
import "../Pillbox/pillbox.css";
import "./menu.css";

const Menu = ({imageType, headerTitle, children, buttonColor, buttonTitle, buttonEvent, showButton}) => {
    return(
        <div className="pillbox--container">
            <div className="pillbox__header--style">
                <h2 className="">{headerTitle}</h2>
                <img src={imageType==="heart"?heart:chef} className="img--style" alt="" />
            </div>
            <div className="pillbox__text--style menu__text--style">{children}</div>

            {showButton==="true" &&
                <button type="button" onClick={()=> {buttonEvent()}} className={`pillbox__button--style ${buttonColor==='light'?'lightGreen':'darkGreen'}`}>
                    {buttonTitle}
                </button>
            }
           
        </div>
    );
}

export default Menu;