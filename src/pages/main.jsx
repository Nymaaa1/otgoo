import Navbar from "../Components/Navbar";
import "./main.css";
import hool1 from "../assets/hool1.png";
import hool2 from "../assets/hool2.png";
import hool3 from "../assets/hool3.png";
import hool4 from "../assets/hool4.png";
import hool5 from "../assets/hool5.png";
import hool6 from '../assets/hool6.png';
import hool7 from '../assets/hool7.png';
import hool8 from '../assets/hool8.png';
import hool9 from '../assets/hool9.png';
import hool10 from '../assets/hool10.png';
import shul from "../assets/shul.png";
import shul12 from "../assets/shul12.png";
import shul13 from "../assets/shul13.png";
import shul14 from "../assets/shul14.png";
import shul15 from "../assets/shul15.png";
import shul16 from "../assets/shul16.png";
import shul22 from "../assets/shul22.png";
import shul18 from "../assets/shul18.png";
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
import shul3 from '../assets/shul3.png';
import shul17 from '../assets/shul17.png';
import shul23 from '../assets/shul23.png';
import shul24 from '../assets/shul24.png';
import shul25 from '../assets/shul25.png';
import shul26 from '../assets/shul26.png';
import zuush1 from '../assets/zuush1.png';
import zuush2 from '../assets/zuush2.png';
import zuush3 from '../assets/zuush3.png';
import zuush4 from '../assets/zuush4.png';
import zuush5 from '../assets/zuush5.png';
import zuush6 from '../assets/zuush6.png';
import zuush7 from '../assets/zuush7.png';
import zuush8 from '../assets/zuush8.png';
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

import React, { useEffect, useState } from "react";
import axios from "axios";

const Main = () => {
  let [data, setData] = useState([]);
  let [otpData, setOtpData] = useState();
  let [pricePopup, setPricePopup] = useState(0);
  let [quantity, setQuantity] = useState(1);
  let [allPrice, setAllPrice] = useState(0);
  let [index, setIndex] = useState(1);
  let [draftData, setDraftData] = useState([]);
  let [drafPrice, setDraftPrice] = useState(0);

  const setDraft = (name, imageUrl, price, count) => {
    const newItem = { name, imageUrl, price, count: Number(count) };
    setDraftData(prevDraftData => [...prevDraftData, newItem]);
  };

  useEffect(() => {
    getData();
  }, [index]);

  const [isOpen, setIsOpen] = useState(false);
  const [isDraftOpen, setIsDraftOpen] = useState(false);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(prevQuantity => prevQuantity - 1);
      let price = (quantity.valueOf() - 1) * pricePopup.valueOf();
      setAllPrice(price);
    }
  }

  const increaseQuantity = () => {
    setQuantity(prevQuantity => prevQuantity + 1);
    let price = (quantity.valueOf() + 1) * pricePopup.valueOf();
    setAllPrice(price);
  }

  const allPriceOfDraft = () => {
    let totalPrice = 0;
    draftData.forEach((foodItem) => {
      totalPrice += foodItem.count;
    });
    setDraftPrice(totalPrice);
  }

  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  const popupSet = () => {
    setIsDraftOpen(!isDraftOpen);
  };

  const imageMap = {
    shul: shul,
    shul12: shul12,
    shul13: shul13,
    shul14: shul14,
    shul15: shul15,
    shul16: shul16,
    shul22: shul22,
    shul18: shul18,
    shul3: shul3,
    u1: u1,
    u2: u2,
    u3: u3,
    u4: u4,
    u5: u5,
    u6: u6,
    u7: u7,
    u8: u8,
    u9: u9,
    u10: u10,
    u11: u11,
    u12: u12,
    u13: u13,
    shul17: shul17,
    shul23: shul23,
    shul24: shul24,
    shul25: shul25,
    shul26: shul26,
    zuush1: zuush1,
    zuush2: zuush2,
    zuush3: zuush3,
    zuush4: zuush4,
    zuush5: zuush5,
    zuush6: zuush6,
    zuush7: zuush7,
    zuush8: zuush8,
    hachir1: hachir1,
    hachir2: hachir2,
    hachir3: hachir3,
    hachir4: hachir4,
    hachir5: hachir5,
    hachir6: hachir6,
    hachir7: hachir7,
    hachir8: hachir8,
    hachir9: hachir9,
    hachir10: hachir10
  };

  const renderImage = (imageUrl) => {
    const imageSource = imageMap[imageUrl];
    if (imageSource) {
      return <img src={imageSource} alt={imageUrl} />;
    } else {
      return null;
    }
  };

  const splitPrice = (price) => {
    return price.split(",");
  };

  async function getData() {
    await axios
      .post("http://localhost:5000/v1/food", { food: index })
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        alert(error);
        console.error("Error fetching data:", error);
      });
  }

  return (
    <div>
      <Navbar />
      <div className="food-description">
        <p>Шөлтэй хоол</p>
      </div>
      <div className="price" onClick={() => { popupSet(); allPriceOfDraft(); }}>
        <div class="content">
          <h1>Захиалах</h1>
        </div>
      </div>
      {isOpen && (
        <div className="popup-container">
          <div className="popup">
            <div className="popup-content">
              <h1>Захиалга нэмэх</h1>
              {renderImage(otpData.imageUrl)}
              <p>{otpData.name}</p>
              <div className="body-text">
                <p>{otpData.description}</p>
              </div>
              <div className="body-text">
                <p>₮{pricePopup}</p>
              </div>
              <div className="body-text">
                <p>Нийт үнэ: ₮{allPrice}</p>
              </div>
              <div className="quantity-widget">
                <button onClick={decreaseQuantity}>-</button>
                <span>{quantity}</span>
                <button onClick={increaseQuantity}>+</button>
              </div>
              <button onClick={() => { togglePopup(); setDraft(otpData.name, otpData.imageUrl, pricePopup, allPrice) }}>Нэмэх</button>
            </div>
          </div>
        </div>
      )}
      {isDraftOpen && (
        <div className="popup-container">
          <div className="popups">
            <div className="popup-content">
              <h1>Захиалга</h1>
              {draftData.map((foodItem) => (
                <div className="order">
                  {renderImage(foodItem.imageUrl)}
                  <p>{foodItem.name}</p>
                </div>
              ))}
              <div className="body-text">
                <p>Нийт үнэ: ₮{drafPrice}</p>
              </div>
              <button onClick={() => { popupSet(); setDraftData([]); }}>Захиалах</button>
            </div>
          </div>
        </div>
      )}
      <div className="container-food-list">
        <div className="food-menu">
          <div className="food-image">
            <img src={index === 1 ? hool6 : hool1} alt="" onClick={() => setIndex(1)} />
            <img src={index === 2 ? hool7 : hool2} alt="" onClick={() => setIndex(2)} />
            <img src={index === 3 ? hool8 : hool3} alt="" onClick={() => setIndex(3)} />
            <img src={index === 4 ? hool9 : hool4} alt="" onClick={() => setIndex(4)} />
            <img src={index === 5 ? hool10 : hool5} alt="" onClick={() => setIndex(5)} />
          </div>
          <div className="order-side">
            {data.map((foodItem) => (
              <div className="order" key={foodItem.idf}>
                {renderImage(foodItem.imageUrl)}
                <p>{foodItem.name}</p>
                <div className="body-text">
                  <p>{foodItem.description}</p>
                </div>
                <div className="price" onClick={() => { setQuantity(1); togglePopup(); setOtpData(foodItem); setPricePopup(splitPrice(foodItem.price)[0]); setAllPrice(splitPrice(foodItem.price)[0]); }}>
                  <div class="content">
                    <h1>Жижиг:</h1>
                    <p>₮{splitPrice(foodItem.price)[0]}</p>
                  </div>
                </div>
                <div className="price" onClick={() => { setQuantity(1); togglePopup(); setOtpData(foodItem); setPricePopup(splitPrice(foodItem.price)[1]); setAllPrice(splitPrice(foodItem.price)[1]); }}>
                  <div class="content">
                    <h1>Дунд:</h1>
                    <p>₮{splitPrice(foodItem.price)[1]}</p>
                  </div>
                </div>
                <div className="price" onClick={() => { setQuantity(1); togglePopup(); setOtpData(foodItem); setPricePopup(splitPrice(foodItem.price)[2]); setAllPrice(splitPrice(foodItem.price)[2]); }}>
                  <div class="content">
                    <h1>Том:</h1>
                    <p>₮{splitPrice(foodItem.price)[2]}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
