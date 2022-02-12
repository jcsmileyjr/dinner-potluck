import "./headerButton.css";
const HeaderButton = ({headerButtonTitle, event}) => {
    return(
        <div>
            <button onClick={()=> {event()}} type="button" className="HeaderButton__button--style">{headerButtonTitle}</button>
        </div>
    );
}

export default HeaderButton;