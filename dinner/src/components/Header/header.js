import ChefHeart from "../../images/chef-heart-green.png";
import HeaderButton from "../HeaderButton/HeaderButton";
import "./header.css";
const Header = () => {
    return(
        <div className="header--container">
            <div className="header__title--container">
                <img src={ChefHeart} className="header__image--style" alt="" />
                <h1>Sunday's Family Dinner <span className="header__title--style">& Potluck</span></h1>
            </div>
            <div className="header__button--container">
                <HeaderButton mode="Start" />
            </div>
        </div>
    );
}

export default Header;