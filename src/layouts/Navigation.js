import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/Navigation.css";

const Navigation = () => {
  return (
    <nav className="main">
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="products">Protect yourself</NavLink>
        </li>
        <li>
          <NavLink to="contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="admin">Something</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
