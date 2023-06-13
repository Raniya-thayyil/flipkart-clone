import React from "react";
import { useEffect, useState } from "react";

import './AcMobiles.css'

function AcMobiles() {
    const [data, setData] = useState([]);
  const fetchData = () => {
    fetch(
      "https://raw.githubusercontent.com/Raniya-thayyil/flipkart-json/main/data.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data.acMobiles);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="acMobile-list-main">
        {data.map((item) => (
            <div className="acMobile-list"> 
            <img src={item}/>

            </div>
        ))}


      </div>
    </>
  );
}

export default AcMobiles;
