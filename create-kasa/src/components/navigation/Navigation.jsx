import React from 'react';
import { NavLink } from "react-router-dom";
import "./Navigation.css"
import logo from '../../images/LOGO.png';

import { classNames } from './../../helpers/style';

//Nav
const Navigation = () => {
  return (
    <div className="navigation">
      <NavLink to="/" className="logo">
        <img src={logo} alt="Logo KASA" />
      </NavLink>
      <ul>
        <NavLink to="/" className={classNames(({ isActive }) => isActive && 'active')}>
          <li>Accueil</li>
        </NavLink>
        <NavLink to="/about" className={classNames(({ isActive }) => isActive && 'active')}>
          <li>A Propos</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;