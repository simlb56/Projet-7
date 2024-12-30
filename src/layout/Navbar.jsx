import React from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.scss";


function Navbar() {
  return(
  <nav className="navbar">
    <NavLink to="accueil">
    <div className="navbar__logo">
        <img src="/logo.png" alt="logo"/>
    </div></NavLink>
    <NavLink to="accueil"><div>Accueil</div></NavLink>
    <NavLink to="/apropos"><div>A Propos</div></NavLink>
  </nav>);
}

export default Navbar;