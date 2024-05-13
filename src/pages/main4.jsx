import React from 'react';
import './Order.css'; 
import Navbar from '../Components/Navbar';
import hool6 from '../assets/hool6.png';
import hool3 from '../assets/hool3.png';
import hool9 from '../assets/hool9.png';
import hool5 from '../assets/hool5.png';
import hool2 from '../assets/hool2.png';
import hachir1 from '../assets/hachir1.png';
import hachir2 from '../assets/hachir2.png';
import hachir3 from '../assets/hachir3.png';
import hachir4 from '../assets/hachir4.png';
import hachir5 from '../assets/hachir5.png';
import hachir6 from '../assets/hachir6.png';
import hachir7 from '../assets/hachir7.png';
import hachir8 from '../assets/hachir8.png';
import hachir9 from '../assets/hachir9.png';
import hachir10 from '../assets/hachir10.png';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Main4 = () => {
  return (
    <div>
      <Navbar />
      <div className='food-description'>
        <p>Хоолны хачир</p>
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
            <a href="Main3">
                        <img src={hool3} alt="" />
            </a>
            <Link to="/main4">
              <img src={hool9} alt="" />
            </Link> 
            <a href="Main5">
                        <img src={hool5} alt="" />
            </a>

      
        </div>
          <div className='order-side'>
          <div className='order'>
            <img src={hachir1} alt="" />
            <p>Будаа</p>
            <div className='body-text'>
            </div>
            <div className='price'>
              <div className='content'>
                <p>₮1'000</p>
              </div>
            </div>

          </div>
          <div className='order'>
            <img src={hachir2} alt="" />
            <p>Бин</p>
            <div className='body-text'>
            </div>
            <div className='price'>
              <div className='content'>
                <p>₮500</p>
              </div>
            </div>

          </div>
          <div className='order'>
            <img src={hachir3} alt="" />
            <p>Шарсан кимчи</p>
            <div className='body-text'>
            </div>
            <div className='price'>
              <div className='content'>
                <p>500</p>
              </div>
            </div>

          </div>
          <div className='order'>
            <img src={hachir4} alt="" />
            <p>Мантуу</p>
            <div className='body-text'>
            </div>
            <div className='price'>
              <div className='content'>
                <p>₮500</p>
              </div>
            </div>

          </div>
          <div className='order'>
            <img src={hachir5} alt="" />
            <p>Талх</p>
            <div className='body-text'>
            </div>
            <div className='price'>
              <div className='content'>
                <p>₮800</p>
              </div>
            </div>

          </div>
          <div className='order'>
            <img src={hachir6} alt="" />
            <p>Шарсан өндөг</p>
            <div className='body-text'>
            </div>
            <div className='price'>
              <div className='content'>
                <p>₮1'000</p>
              </div>
            </div>

          </div>
          <div className='order'>
            <img src={hachir7} alt="" />
            <p>Чанасан өндөг</p>
            <div className='body-text'>
            </div>
            <div className='price'>
              <div className='content'>
                <p>₮1'000</p>
              </div>
            </div>

          </div>
          <div className='order'>
            <img src={hachir8} alt="" />
            <p>Сонгино</p>
            <div className='body-text'>
            </div>
            <div className='price'>
              <div className='content'>
                <p>₮300</p>
              </div>
            </div>
            

          </div>
          <div className='order'>
            <img src={hachir9} alt="" />
            <p>Яншуй</p>
            <div className='body-text'>
            </div>
            <div className='price'>
              <div className='content'>
                <p>₮300</p>
              </div>
            </div>

          </div>
          <div className='order'>
            <img src={hachir10} alt="" />
            <p>Сармис</p>
            <div className='body-text'>
            </div>
            <div className='price'>
              <div className='content'>
                <p>₮300</p>
              </div>
            </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main4;
