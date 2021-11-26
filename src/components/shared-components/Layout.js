import React from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";
import "antd/dist/antd.css";

const Layout = ({ children }) => {
  return (
    <div className="lucius">
      <NavBar />
      <div className="padChildren container2">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
