import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navBar">
      <div className="container1 flex-space-btw">
        <img
          src="./assets/AppLogo1.svg"
          alt="application logo"
          className="logo"
        ></img>
        <div className="navLinks">
          <Link to="/">Home</Link>
          <Link to="/test">Test Page</Link>
          <Link to="/dashboard">Dashboard</Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
