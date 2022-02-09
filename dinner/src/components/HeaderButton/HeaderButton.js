import "./headerButton.css";
const HeaderButton = ({mode}) => {
    return(
        <div>
            <button type="button" className="HeaderButton__button--style">{mode}</button>
        </div>
    );
}

export default HeaderButton;