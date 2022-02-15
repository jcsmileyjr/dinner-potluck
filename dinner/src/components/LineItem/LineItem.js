import "./lineItem.css";

const LineItem = ({leftContent, rightContent, hasButton = "false", buttonTitle, buttonEvent}) => {
    return(
        <div className="lineItem--container">
            <span>{leftContent}</span>
            {hasButton==="true" &&
                <button type="button" className="lineItem__button--style" onClick={() => {buttonEvent()}}>{buttonTitle}</button>
            }
            {hasButton==="false" &&
                <span>{rightContent}</span>
            }
        </div>
    );
}

export default LineItem;
