import "./headerButton.css";
const HeaderButton = ({headerButtonTitle, event}) => {
    return(
        <div>
            <button onClick={()=> {event()}} type="button" className={`HeaderButton__button--style ${headerButtonTitle==='Done'?"highlightDoneButton":""}`}>{headerButtonTitle}</button>
        </div>
    );
}

export default HeaderButton;