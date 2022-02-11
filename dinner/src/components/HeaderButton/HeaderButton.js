import "./headerButton.css";
const HeaderButton = ({mode, event}) => {
    return(
        <div>
            <button onClick={()=> {event()}} type="button" className="HeaderButton__button--style">{mode}</button>
        </div>
    );
}

export default HeaderButton;