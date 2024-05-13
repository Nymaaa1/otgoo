import React from 'react';
import { Link } from 'react-router-dom';
import './Order.css'; 
import main from '../assets/main.png';

const Order = () => {
  return (
    <div className="container">
      <img src={main} alt="Back" className="back-image" />
      <div className="button-container">
        <Link to="/Home" className="button1">
          Захиалга өгөх
        </Link>
      </div>
    </div>
  );
};

export default Order;
