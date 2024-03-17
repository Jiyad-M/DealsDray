import React from "react";
import logo from "../../stocks/logo.jpg";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="h-logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="h-gray">
        
      </div>
      <div className="h-yellow">
        <h1>Login Page</h1>
      </div>
    </div>
  );
}

export default Header;
