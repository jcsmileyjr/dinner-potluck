import HeaderButton from "../HeaderButton/HeaderButton";
import "./footer.css";
const Footer = ({event, headerButtonTitle}) => {
    return(
        <div>
            <div className="footer__button--container">
                <HeaderButton event={event} headerButtonTitle={headerButtonTitle} />
            </div>
        </div>
    );
}

export default Footer;