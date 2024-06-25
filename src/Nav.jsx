import React from "react";
import { NavLink } from "react-router-dom";
import "./nav.css";

export default function Nav() {
  return (
    <div className="nav">
      <div>
        <NavLink to="/dashboard" className="nav-link">Logo</NavLink>
      </div>
      <h2>
        <NavLink to="/home" className="nav-link">Home</NavLink>
      </h2>
      <div className="buttons">
        <NavLink to="/login" className="nav-button">Login</NavLink>
        <NavLink to="/signup" className="nav-button">SignUp</NavLink>
      </div>
    </div>
  );
}
