import React from "react";
import { Link } from "react-router-dom";

const activeLinkStyle = {
  color: "#2f80ed",
};

const Footer = () => {
  return (
    <footer className="textCenter footer">
      <div className="centered">
        <div>
          <div className="flex">
            <Link activeStyle={activeLinkStyle} to="/">
              Home
            </Link>
            <Link to="/test">Test Page</Link>
            <Link to="/dashboard">Dashboard</Link>
          </div>
          <div>
            {" "}
            <img
              src="./assets/AppLogo2.svg"
              alt="application logo"
              className="logo"
            ></img>
          </div>
          <p>Copyright &copy; 2021 Typo</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
