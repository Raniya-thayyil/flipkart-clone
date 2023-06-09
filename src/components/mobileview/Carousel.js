import React, { useEffect, useState } from "react";

import './Carousel.css'

function Carousel() {
  const [data, setData] = useState([]);
  let [index, setIndex] = useState(0);
  const fetchData = () => {
    fetch(
      "https://raw.githubusercontent.com/Raniya-thayyil/flipkart-clone/main/public/data.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data.flashingImages);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  const callIndex = () => {
    setIndex(index === data.length - 1 ? 0 : index + 1);
  };

  useEffect(() => {
    setTimeout(callIndex, 2000);
  });
  return (
    <>
      <div className="carousel-list">
        {data.map((item) => {
            return (
                <div
                  className="carousel-img"
                  style={{
                    transform: `translateX(${-100 * index}%)`,
                    transition: "transform ease-out 0.45s",
                  }}
                  key={item}
                >
                  <img src={item.image} />
                </div>
            )
              })}
            
      </div>
    </>
  );
}

export default Carousel;
