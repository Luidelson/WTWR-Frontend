import avatar from "../../assets/avatar.logo.png";
import "./SideBar.css";

function SideBar() {
  return (
    <div className="sidebar">
      <img className="sidebar__avatar" src={avatar} alt="Default avatar" />
      <p className="sidebar__usarname">Terrence Tegegne</p>
    </div>
  );
}

export default SideBar;
