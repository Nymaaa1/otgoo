import React, { useState } from 'react';
import './Order.css'; 
import Navbar from '../Components/Navbar';
import hool6 from '../assets/hool6.png';
import hool3 from '../assets/hool3.png';
import hool4 from '../assets/hool4.png';
import hool10 from '../assets/hool10.png';
import hool2 from '../assets/hool2.png';
import u1 from '../assets/u1.png';
import u2 from '../assets/u2.png';
import u3 from '../assets/u3.png';
import u4 from '../assets/u4.png';
import u5 from '../assets/u5.png';
import u6 from '../assets/u6.png';
import u7 from '../assets/u7.png';
import u8 from '../assets/u8.png';
import u9 from '../assets/u9.png';
import u10 from '../assets/u10.png';
import u11 from '../assets/u11.png';
import u12 from '../assets/u12.png';
import u13 from '../assets/u13.png';
import { Link } from 'react-router-dom'; 


const Main5 = () => {

  const orderItems = [
    { id: 'u1', name: 'Сүүтэй цай', price: '₮500', image: u1 },
    { id: 'u2', name: 'Байхуу цай', price: '₮500', image: u2 },
    { id: 'u3', name: 'Кофе', price: '₮800', image: u3 },
    { id: 'u4', name: 'Аарц', price: '₮1000', image: u1 },
    { id: 'u6', name: 'Халуун чацаргана', price: '₮1000', image: u4 },
    { id: 'u5', name: 'COCA COLA лаазтай 0.33л', price: '₮4500', image: u5 },
    { id: 'u7', name: 'Жүржийн талст', price: '₮3500', image: u6 },
    { id: 'u8', name: 'Гоё жүүс', price: '₮2700', image: u7 },
    { id: 'u5', name: 'COCA COLA хүслийн 0.5л', price: '₮2800', image: u8 },
    { id: 'u10', name: 'Fuze tea', price: '₮3000', image: u9 },
    { id: 'u11', name: 'Peace tea', price: '₮3900', image: u10 },
    { id: 'u13', name: 'Punch жүүс', price: '₮2800', image: u11 },
    { id: 'u12', name: 'Мульти витамин', price: '₮2500', image: u12 },
    { id: 'u14', name: 'Bonaqua цэвэр ус', price: '₮2500', image: u13 },

  ];

  const [quantities, setQuantities] = useState({
  });

  const increaseQuantity = (id) => {
    setQuantities(prevQuantities => ({
      ...prevQuantities,
      [id]: prevQuantities[id] + 1,
    }));
  };

  const decreaseQuantity = (id) => {
    if (quantities[id] > 1) {
      setQuantities(prevQuantities => ({
        ...prevQuantities,
        [id]: prevQuantities[id] - 1,
      }));
    }
  };
  
  return (
    <div>
      <Navbar />
      <div className='food-description'>
        <p>Уух зүйлс</p>
      </div>  
      <div className='container-food-list'>
        <div className='food-menu'>
          <div className='food-image'>
            <a href="/Main">
              <img src={hool6} alt="" />
            </a>
            <a href="/Main2">
              <img src={hool2} alt="" />
            </a>
            <Link to="/main3">
              <img src={hool3} alt="" />
            </Link> 
            <a href="Main4">
              <img src={hool4} alt="" />
            </a>
            <img src={hool10} alt="" />
          </div>
          <div className='order-side'>
            {orderItems.map((item) => (
              <div className='order' key={item.id}>
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <div className='body-text'></div>
                <div className='price'>
                  <div className='content'>
                    <p>{item.price}</p>
                  </div>
                </div>
                <div className="quantity-button">
                 
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main5;