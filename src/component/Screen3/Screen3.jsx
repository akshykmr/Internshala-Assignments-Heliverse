import "./Screen3.scss";
import ARROW from "../../assest/arrow.png";
import { useState, useEffect } from "react";
// import { useNavigate } from 'react-router-dom';
// import Screen1 from '../Screen1/Screen1'


// import { useState } from "react";

const Screen3 = ({handleBackToScreen1}) => {

// const navigate = useNavigate();

// const handleClick =()=>{
//   navigate('/screen1');
// }
  

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
        <div className="screen3">
        <div className="heading">
              <span>4 Friends Gave U</span>
              <span>Some Love</span>
            </div>
            <div className="heart-box">
              <span>{number}</span>
            </div>
            <div className="speech-bubble">
              <span>Congrats!</span></div> 
               {/* <div className="arrow-png">
                <button >
              <img  onClick={handleBackToScreen1} src={ARROW} alt="" className="left" />
                </button>
            </div> */}
        </div>
      </>
    );
  };
  
  export default Screen3;
