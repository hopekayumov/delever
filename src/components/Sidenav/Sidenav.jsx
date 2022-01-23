import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidenav.css";

function Sidenav({children, path, ...props}) {
  return (
    <NavLink className={isData => isData.isActive ? "active" : "sidebar__nav--link"} to={`/${path}`}>
      {children}
    </NavLink>
  );
}

export default Sidenav;
