import "./lineItem.css";

const LineItem = ({leftContent, rightContent}) => {
    return(
        <div className="lineItem--container">
            <span>{leftContent}</span><span>{rightContent}</span>
        </div>
    );
}

export default LineItem;
