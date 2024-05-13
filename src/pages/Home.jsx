import React from "react";
import "./Home.css";
import Navbar from "../Components/Navbar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container1">
        <div>
          <p>Захиалгын төрлийг сонгоно уу?</p>
          <Link to="/main" className="button">
            Энд идэх
          </Link>
          <Link to="/main" className="button">
            Авж явах
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
