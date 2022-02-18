import "./hiddenLink.css";

const HiddenLink = ({showPlanningPage, children} ) => {
    return(
        <div onClick={()=> {showPlanningPage()}}>
            {children}
        </div>
    );
}

export default HiddenLink;