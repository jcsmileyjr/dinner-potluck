import "./lineItem.css";

const LineItem = ({leftContent, rightContent, hasButton = "false", buttonTitle, buttonEvent}) => {
    return(
        <div className="lineItem--container">
            <span className="lineItem__leftContent--style">{leftContent}</span>
            {hasButton==="true" &&
                <button type="button" className="lineItem__button--style" onClick={() => {buttonEvent()}}>{buttonTitle}</button>
            }
            {hasButton==="false" &&
                <span className="lineItem__rightContent--style">{rightContent}</span>
            }
        </div>
    );
}

export default LineItem;
