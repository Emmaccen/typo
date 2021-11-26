import React from "react";
import { Link } from "react-router-dom";

const activeLinkStyle = {
  color: "#2f80ed",
};

const NavBar = () => {
  return (
    <div className="lucius">
      <nav className="navBar">
        <div className="container1 flex-space-btw">
          <div className="logo">Logo</div>
          <div className="navLinks">
            <Link activeStyle={activeLinkStyle} to="/">
              Home
            </Link>
            <Link to="/test">Test Page</Link>
            <Link to="/dashboard">Dashboard</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      <NavBar />
    </div>
  );
};

export default Home;
