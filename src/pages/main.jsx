import Navbar from "../Components/Navbar";
import "./main.css";
import hool1 from "../assets/hool1.png";
import hool2 from "../assets/hool2.png";
import hool3 from "../assets/hool3.png";
import hool4 from "../assets/hool4.png";
import hool5 from "../assets/hool5.png";
import shul from "../assets/shul.png";
import shul12 from "../assets/shul12.png";
import shul13 from "../assets/shul13.png";
import shul14 from "../assets/shul14.png";
import shul15 from "../assets/shul15.png";
import shul16 from "../assets/shul16.png";
import shul22 from "../assets/shul22.png";
import shul18 from "../assets/shul18.png";
import React, { useEffect, useState } from "react";
import axios from "axios";

const Main = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    axios
      .post("http://localhost:5000/v1/food", { food: 1 })
      .then((response) => {
        setData(response.data.data);
        alert(JSON.stringify(response.data.data));
        alert(data);
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
      <div className="container-food-list">
        <div className="food-menu">
          <div className="food-image">
            <img src={hool1} alt="" />

            <a href="Main2">
              <img src={hool2} alt="" />
            </a>
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
          <div className="order-side">
            {data.map((foodItem) => (
              <div className="order" key={foodItem.idf}>
                <img src={foodItem.imageUrl} alt={foodItem.name} />
                <p>{foodItem.name}</p>
                <div className="body-text">
                  <p>{foodItem.description}</p>
                </div>
                {foodItem.prices.map((price, index) => (
                  <div key={index}>
                    <div class="price">
                      <div class="content">
                        <h1>Жижиг</h1>
                        <p>₮{price}</p>
                      </div>
                    </div>
                    <div class="price">
                      <div class="content">
                        <h1>Дунд</h1>
                        <p>₮{price}</p>
                      </div>
                    </div>
                    <div class="price">
                      <div class="content">
                        <h1>Том</h1>
                        <p>₮{price}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
