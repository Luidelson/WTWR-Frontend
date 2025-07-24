import "./Header.css";
import ToggleSwitch from "../ToggleSwitch/ToggleSwitch";
import logo from "../../assets/wtwr.logo.svg";
import avatar from "../../assets/avatar.logo.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Header({ handleAddClick, weatherData, isLoggedIn, onLoginClick, onRegisterClick }) {
  const currentUser = useContext(CurrentUserContext);
  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
  });

  const getInitial = (name) => {
    return name ? name.charAt(0).toUpperCase() : "";
  };

  return (
    <header className="header">
      <Link to={"/"}>
        <img className="header__logo" src={logo} alt="WTWR Logo" />
      </Link>
      <p className="header__date-and-location">
        {currentDate}, {weatherData.city}
      </p>
      <ToggleSwitch />
      
      {isLoggedIn ? (
        <>
          <button
            onClick={handleAddClick}
            type="button"
            className="header__add-clothes-btn"
          >
            + Add clothes
          </button>
          <Link to="/profile" className="header__link header__user-container">
            <p className="header__username">{currentUser?.name}</p>
            {currentUser?.avatar ? (
              <img src={currentUser.avatar} alt="User Avatar" className="header__avatar" />
            ) : (
              <div className="header__avatar-placeholder">
                {getInitial(currentUser?.name)}
              </div>
            )}
          </Link>
        </>
      ) : (
        <div className="header__auth-buttons">
          <button 
            type="button" 
            className="header__signup-btn"
            onClick={onRegisterClick}
          >
            Sign Up
          </button>
          <button 
            type="button" 
            className="header__login-btn"
            onClick={onLoginClick}
          >
            Log In
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
