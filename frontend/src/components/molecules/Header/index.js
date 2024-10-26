import React from "react";
import "./header.scss";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="header">
      <p className="logo-app">MERN-blog</p>
      <p className="menu-item" onClick={() => navigate("/login")}>
        logout
      </p>
    </header>
  );
};

export default Header;
