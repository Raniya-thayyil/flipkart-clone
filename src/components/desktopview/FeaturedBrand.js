import React, { useRef, useState, useEffect } from "react";



import leftAngle from "../assets/leftAngle.svg"

import './FeaturedBrand.css'

function FeaturedBrand() {
    const [data, setData] = useState([]);
    const imgCard = useRef();
    const rightArrow = useRef();
    const arrowLeft = useRef();
    const fetchData = () => {
      fetch(
        "https://raw.githubusercontent.com/Raniya-thayyil/flipkart-json/main/data.json"
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setData(data.featuredBrand);
        });
    };
    useEffect(() => {
      fetchData();
    }, []);

    const handleClickRight = () => {        
        imgCard.current.style.transform = `translateX(${-35}%)`;
        rightArrow.current.style.display = "none";
        arrowLeft.current.style.display = "flex";
        imgCard.current.style.transition = "transform ease-in-out 0.45s";
    }

    const handleClickLeft = () => {
        imgCard.current.style.transform = `translateX(${2}%)`;
        arrowLeft.current.style.display = "none";
        rightArrow.current.style.display = "flex";
        imgCard.current.style.transition = "transform ease-in-out 0.45s";
      };
  return (
    <>
      <div className="features-main">
        <h2>Featured Brand</h2>
       
        <div className="angle-left-feat" ref={arrowLeft}>            
            <img src={leftAngle} onClick={handleClickLeft}/>
        </div>
        <div className="features-list" ref={imgCard}>
            {data.map((item) => (
                <div className="feat-imglist" >
                    <img src={item}/>                 
                </div>
            ))}
        </div>
        <div className="deal-angle-feat" ref={rightArrow}>
            {/* <FaAngleRight className="fa-angle"/> */}
            <img src={leftAngle} onClick={handleClickRight}/>
        </div>
       
      </div>
    </>
  );
}

export default FeaturedBrand;
