import React from "react";
import "./Sidebar.css";
import Logo from "../../assets/images/Logo.svg";
import ProfileNoti from "../../assets/images/profileNotif.svg";
import ProfileAvatar from "../../assets/images/profileAvatar.svg";

function Sidebar({ children }) {
  return (
    <div className="sidebar">
      <img className="sidebar__logo" src={Logo} alt="Logo" />

      <nav className="sidebar__nav">{children}</nav>

      <div className="sidebar__profile">
        <div>
          <button>
            <img src={ProfileNoti} alt="notification" />
          </button>
        </div>
        <div>
          <button>
            <img src={ProfileAvatar} alt="avatar" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
