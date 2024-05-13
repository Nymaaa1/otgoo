import React from 'react';
import './Order.css'; 
import Navbar from '../Components/Navbar';
import hool6 from '../assets/hool6.png';
import hool8 from '../assets/hool8.png';
import hool4 from '../assets/hool4.png';
import hool5 from '../assets/hool5.png';
import hool2 from '../assets/hool2.png';
import zuush1 from '../assets/zuush1.png';
import zuush2 from '../assets/zuush2.png';
import zuush3 from '../assets/zuush3.png';
import zuush4 from '../assets/zuush4.png';
import zuush5 from '../assets/zuush5.png';
import zuush6 from '../assets/zuush6.png';
import zuush7 from '../assets/zuush7.png';
import zuush8 from '../assets/zuush8.png';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

const Main3 = () => {
  return (
    <div>
      <Navbar />
      <div className='food-description'>
        <p>Хөнгөн зууш</p>
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
              <img src={hool8} alt="" />
            </Link> 
            <a href="Main4">
                        <img src={hool4} alt="" />
            </a>
            <a href="Main5">
                        <img src={hool5} alt="" />
            </a>

          </div>
          <div className='order-side'>
          <div className='order'>
            <img src={zuush1} alt="" />
            <p>Далайн байцааны салат</p>
            <div className='body-text'>
            </div>
            <div className='price'>
              <div className='content'>
                <p>₮2'500</p>
              </div>
            </div>

          </div>
          <div className='order'>
            <img src={zuush2} alt="" />
            <p>Холимог ногооны салат</p>
            <div className='body-text'>
            </div>
            <div className='price'>
              <div className='content'>
                <p>₮3'500</p>
              </div>
            </div>

            </div>
          <div className='order'>
            <img src={zuush3} alt="" />
            <p>Өргөст хэмхний салат</p>
            <div className='body-text'>
            </div>
            <div className='price'>
              <div className='content'>
                <p>₮2'500</p>
              </div>
            </div>

            </div>
          <div className='order'>
            <img src={zuush4} alt="" />
            <p>Гүзээний салат</p>
            <div className='body-text'>
            </div>
            <div className='price'>
              <div className='content'>
                <p>₮3'500</p>
              </div>
            </div>

            </div>
          <div className='order'>
            <img src={zuush5} alt="" />
            <p>Чинжүүтэй үхрийн махан салат</p>
            <div className='body-text'>
            </div>
            <div className='price'>
              <div className='content'>
                <p>₮3'500</p>
              </div>
            </div>

            </div>
          <div className='order'>
            <img src={zuush6} alt="" />
            <p>Хачиртай ногооны салат</p>
            <div className='body-text'>
            <p>Шарсан өндөг, будаа, ногооны салат</p>
            </div>
            <div className='price'>
              <div className='content'>
                <p>₮4'800</p>
              </div>
            </div>

            </div>
          <div className='order'>
            <img src={zuush7} alt="" />
            <p>Хачиртай гүзээний салат</p>
            <div className='body-text'>
            <p>Шарсан өндөг, будаа, гүзээний салат</p>
            </div>
            <div className='price'>
              <div className='content'>
                <p>₮4'800</p>
              </div>
            </div>

            </div>
          <div className='order'>
            <img src={zuush8} alt="" />
            <p>Хачиртай махан салат</p>
            <div className='body-text'>
            <p>Шарсан өндөг, будаа, махан салат</p>
            </div>
            <div className='price'>
              <div className='content'>
                <p>₮4'800</p>
              </div>
            </div>
   
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Main3;
