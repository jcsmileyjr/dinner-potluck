import ChefHeart from "../images/chef-heart-green.png";
import "./header.css";
const Header = () => {
    return(
        <div className="header--container">
            <div className="header__title--container">
                <img src={ChefHeart} className="header__image--style" alt="" />
                <h1 className="header__title--style">Sunday's Family Dinner & Potluck</h1>
            </div>
            <div className="header__button--container">
                <button type="button" className="header__button--style" >Start</button>
            </div>
        </div>
    );
}

export default Header;