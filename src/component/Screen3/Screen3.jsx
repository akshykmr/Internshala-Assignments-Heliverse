import HOST from "../../assest/girlClap.png";
import PODIUM from "../../assest/awardPlatform.png";
import "./Screen3.scss";
import ARROW from "../../assest/arrow.png";
import { useState, useEffect } from "react";
// import { useState } from "react";

const Screen3 = () => {

  const [number, setNumber] = useState(15000);

  useEffect(() => {
    let interval;
    setTimeout(() => {
      interval = setInterval(() => {
        setNumber((prevNumber) => {
          if (prevNumber >= 40000) {
            clearInterval(interval);
            return prevNumber;
          }
          return prevNumber + 100;
        });
      }, 8);
    }, 2000);
  
    return () => clearInterval(interval);
  }, []);
  
       
    return (
      <>
        <div className="main-contanier">
          <div className="stage-background">
            <div className="heading">
              <span>4 Friends Gave U</span>
              <span>Some Love</span>
            </div>
            <div className="heart-box">
              <span>{number}</span>
            </div>
            <div className="speech-bubble">
              <span>Congrats!</span></div>          <div className="arrow-png">
                <button >
              <img  onClick={()=>{}} src={ARROW} alt="" className="left" />
                </button>
            </div>
          </div>
          <div className="podium">
            <img src={PODIUM} alt="" />
            <div className="host">
              <img src={HOST} alt="" />
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Screen3;
