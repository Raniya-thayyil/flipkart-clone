import React from "react";

import { useState } from "react";
import { useEffect } from "react";

import './FirstNav.css'

function FirstNav() {
    const [data, setData] = useState([]);  
    const fetchData = () => {
      fetch(
        "https://raw.githubusercontent.com/Raniya-thayyil/flipkart-clone/main/public/data.json"
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setData(data.navbar);
        });
    };
    useEffect(() => {
      fetchData();
    }, []);

  return (
    <>
      <div className="nav-list">
        <ul>
        {data.map((item, idx) => (
              <li key={idx}>
                <img src={item.image}/>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
}

export default FirstNav;
