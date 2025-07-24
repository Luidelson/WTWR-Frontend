import avatar from "../../assets/avatar.logo.png";
import "./SideBar.css";
import { useContext } from "react";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function SideBar({ onEditProfile, onSignOut }) {
  const currentUser = useContext(CurrentUserContext);

  const getInitial = (name) => {
    return name ? name.charAt(0).toUpperCase() : "";
  };

  return (
    <div className="sidebar">
      {currentUser?.avatar ? (
        <img className="sidebar__avatar" src={currentUser.avatar} alt="User avatar" />
      ) : (
        <div className="sidebar__avatar-placeholder">
          {getInitial(currentUser?.name)}
        </div>
      )}
      <p className="sidebar__username">{currentUser?.name}</p>
      <button 
        className="sidebar__edit-button" 
        type="button"
        onClick={onEditProfile}
      >
        Edit profile
      </button>
      <button 
        className="sidebar__signout-button" 
        type="button"
        onClick={onSignOut}
      >
        Sign out
      </button>
    </div>
  );
}

export default SideBar;
