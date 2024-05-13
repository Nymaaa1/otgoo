import React from "react";
import { Link } from "react-router-dom";
import Home from "../assets/home.png";
import "./Navbar.css";
import back from "../assets/back.png";
const Navbar = () => {
  return (
    <div className="body">
      <div>
        <Link to="/" className="LogoHome">
          <img src={Home} alt="" />
        </Link>
      </div>
      <div className="Back-Button">
        <Link to="/">
          <img src={back} alt="Back" />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
