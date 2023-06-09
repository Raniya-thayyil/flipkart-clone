import React from "react";
import { useEffect, useState } from "react";

import './ThreeImages.css'

function ThreeImages() {
  const [data, setData] = useState([]);
  const fetchData = () => {
    fetch(
      "https://raw.githubusercontent.com/Raniya-thayyil/flipkart-clone/main/public/data.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data.threeImages);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="img-list">
        {data.map((item, idx) => {
          return <img src={item.image} />;
        })}
      </div>
    </>
  );
}

export default ThreeImages;
