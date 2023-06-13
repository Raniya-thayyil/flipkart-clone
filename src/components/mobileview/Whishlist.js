import React from 'react'
import { useState, useEffect } from "react";

import './Whishlist.css'

function Whishlist() {
    const [data, setData] = useState([]);
    const fetchData = () => {
      fetch(
        "https://raw.githubusercontent.com/Raniya-thayyil/flipkart-json/main/data.json"
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setData(data.pricedropAlert);
        });
    };
    useEffect(() => {
      fetchData();
    }, []);
  return (
    <>
    <div className="wish-list-main">
        <div className='whish-head'>
        <p>Price Drop</p>
        </div>       
    <div className="wish-list">
          {data.map((item, idx) => {
            return (
              <div className="wishlist-items">
                <img src={item} />
                {/* <p className="name">{item.caption}</p>
                <p className="price">{item.priceBrand}</p> */}
              </div>
            );
          })}
        </div>
      </div>
    </>
  )
}

export default Whishlist