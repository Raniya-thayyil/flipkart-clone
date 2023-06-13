import React from "react";

import { useState, useEffect } from "react";

import "./InterestingFind.css";

function InterestingFind() {
  const [data, setData] = useState([]);
  const fetchData = () => {
    fetch(
      "https://raw.githubusercontent.com/Raniya-thayyil/flipkart-json/main/data.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data.interestingFinds);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="list-head">
        <div className="heading-btn">
          <p>Add To Your Whishlist</p>
          <a href="">View all</a>
        </div>
        <div className="interesting-list">
          {data.map((item, idx) => {
            return (
              <div className="list-items">
                <img src={item.image} />
                <p className="name">{item.caption}</p>
                <p className="price">{item.priceBrand}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default InterestingFind;
