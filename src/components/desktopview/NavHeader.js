import React from "react";

import { useState} from "react";
import { useEffect } from "react";

import './NavHeader.css'

function NavHeader() {
  const [data, setData] = useState([]);
  const fetchData = () => {
    fetch(
      "https://raw.githubusercontent.com/Raniya-thayyil/flipkart-json/main/data.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data.headNavList);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="main-nav">
        {data.map((item) => {
            return (
                <div className="each-nav">
                <img src={item.image}/>
                <span>{item.caption}</span>
            </div>
            )
        })}

      </div>
    </>
  );
}

export default NavHeader;
