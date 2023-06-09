import React from "react";
import { useEffect, useState } from "react";

import './ElectronicList.css'

function ElectronicList() {
  const [data, setData] = useState([]);
  const fetchData = () => {
    fetch(
      "https://raw.githubusercontent.com/Raniya-thayyil/flipkart-clone/main/public/data.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data.electronicsList);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <div className="electronic-list">
        {data.map((item, idx) => {
          return <img src={item} />;
        })}
      </div>
    </>
  );
}

export default ElectronicList;
