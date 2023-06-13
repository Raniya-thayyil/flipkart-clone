import React, { useRef, useState, useEffect } from "react";

import "./TopDeals.css";
import { FaAngleRight } from "react-icons/fa";
import leftAngle from "../assets/leftAngle.svg"

function TopDeals() {
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
          setData(data.topDeals);
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
      <div className="top-deals-main">
        <div className="top-deal-textlink">
          <h2>Top Deals on fashion</h2>
          <div className="viewall">
            <a href="">view all</a>
          </div>
        </div>
        <div className="angle-left" ref={arrowLeft}>            
            <img src={leftAngle} onClick={handleClickLeft}/>
        </div>
        <div className="topoffers-list" ref={imgCard}>
            {data.map((item) => (
                <div className="offers-main" >
                    <img src={item.image}/>
                    <div className="texts-offer">
                    <span className="cap">{item.caption}</span><br/>
                   
                    <span className="offername">{item.offerLevel}</span><br/>
                    <span className="pricedetail">{item.desc}</span>
                    </div>
                </div>

            ))}
        </div>
        <div className="deal-angle" ref={rightArrow}>
            {/* <FaAngleRight className="fa-angle"/> */}
            <img src={leftAngle} onClick={handleClickRight}/>
        </div>
       
      </div>
    </>
  );
}

export default TopDeals;
