import React from 'react';
import './Order.css'; 
import Navbar from '../Components/Navbar';
import hool6 from '../assets/hool6.png';
import hool7 from '../assets/hool7.png';
import hool3 from '../assets/hool3.png';
import hool4 from '../assets/hool4.png';
import hool5 from '../assets/hool5.png';
import shul3 from '../assets/shul3.png';
import shul17 from '../assets/shul17.png';
import shul23 from '../assets/shul23.png';
import shul24 from '../assets/shul24.png';
import shul25 from '../assets/shul25.png';
import shul26 from '../assets/shul26.png';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Main2 = () => {
  return (
    <div>
      <Navbar />
      <div className='food-description'>
        <p>Захиалгат хоол</p>
      </div>  
      <div className='container-food-list'>
        <div className='food-menu'>
          <div className='food-image'>
                
            <a href="/Main">
            <img src={hool6} alt="" />
            </a>

            <Link to="/main2">
              <img src={hool7} alt="" />
            </Link>
            <a href="Main3">
                        <img src={hool3} alt="" />
            </a>
            <a href="Main4">
                        <img src={hool4} alt="" />
            </a>
            <a href="Main5">
                        <img src={hool5} alt="" />
            </a>

          </div>
          <div className='order-side'>
          <div className='order'>
            <img src={shul3} alt="" />
            <p>Баялаг шөл</p>
            <div className='body-text'>
              <p>Тефтель, хулуу, ногоотой зутан, өндөг, сухар</p>
            </div>
            <div className='price'>
              <div className='content'>
                <h1>Жижиг</h1>
                <p>₮6'300</p>
              </div>
            </div> 
            <div className='price'>
              <div className='content'>
                <h1>Дунд</h1>
                <p>₮6'800</p>
              </div>
            </div>
            <div className='price'>
              <div className='content'>
                <h1>Том</h1>
                <p>₮7'800</p>
              </div>
            </div>
          </div>

          <div className='order'>
            <img src={shul17} alt="" />
            <p>Рамен</p>
            <div className='body-text'>
              <p>Үхрийн мах, гоймон, кимчи, өндөг</p>
            </div>
            <div className='price'>
              <div className='content'>
                <h1>Жижиг</h1>
                <p>₮6'300</p>
              </div>
            </div> 
            <div className='price'>
              <div className='content'>
                <h1>Дунд</h1>
                <p>₮6'800</p>
              </div>
            </div>
            <div className='price'>
              <div className='content'>
                <h1>Том</h1>
                <p>₮7'800</p>
              </div>
            </div>
          </div>

          <div className='order'>
            <img src={shul23} alt="" />
            <p>Шарсан банш</p>
            <div className='body-text'>
              <p>Үхрийн махан банш  + Кимчи</p>
            </div>
            <div className='price'>
              <div className='content'>
                <p>₮8'800</p>
              </div>
            </div> 
          </div>

          <div className='order'>
            <img src={shul24} alt="" />
            <p>Цуйван</p>
            <div className='body-text'>
              <p>Үхрийн мах, жигнэсэн гурил, ногоо</p>
            </div>
            <div className='price'>
              <div className='content'>
                <p>₮8'800</p>
              </div>
            </div> 
          </div>

          <div className='order'>
            <img src={shul25} alt="" />
            <p> Нарийн махан хуурга</p>
            <div className='body-text'>
              <p>Үхрийн мах, жигнэсэн будаа, ногоо</p>
            </div>
            <div className='price'>
              <div className='content'>
                <p>₮8'800</p>
              </div>
            </div> 
          </div>

          <div className='order'>
            <img src={shul26} alt="" />
            <p>Бүрмэл шарсан тахиа</p>
            <div className='body-text'>
              <p>Тахианы мах, чихэрлэг соус, будаа, ногооны салат</p>
            </div>
            <div className='price'>
              <div className='content'>
                <h1>Жижиг</h1>
                <p>₮8'800</p>
              </div>
            </div> 
          </div>

          </div> 
        </div>
      </div>
    </div>
  );
};

export default Main2;
