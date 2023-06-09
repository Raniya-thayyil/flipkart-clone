import React from "react";
import { useEffect, useState } from "react";

import './TwoImages.css'

function TwoImages() {
  const [data, setData] = useState([]);
  const fetchData = () => {
    fetch(
      "https://raw.githubusercontent.com/Raniya-thayyil/flipkart-clone/main/public/data.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data.TwoImages);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="imges-list">
        {data.map((item, idx) => {
          return <img src={item} />;
        })}
      </div>
    </>
  );
}

export default TwoImages;
