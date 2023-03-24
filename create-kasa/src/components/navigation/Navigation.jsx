import React from 'react';
import { NavLink } from "react-router-dom";
import "./Navigation.css"
import logo from '../../images/LOGO.png';

//Nav
const Navigation = () => {
  return (
    <div className="navigation">
      <img src={logo} alt="" />
      <ul>
        <NavLink to="/">
          <li>Accueil</li>
        </NavLink>
        <NavLink to="/about">
          <li>A Propos</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;