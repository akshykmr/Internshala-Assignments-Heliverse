
import "./Screen2.scss";
import ARROW from "../../assest/arrow.png";
import { useState } from "react";
import AVATAR from "../../assest/avtar2.png";

const Screen2 = () => {

    const [slidderIn, setSlidderIn] = useState(false);
    
        setTimeout(() => {
          setSlidderIn(true);
        }, 3000);
       
    return (
      <>
        <div className="Screen2">
        <div className="slidder-box">
              {slidderIn && (
                <div className="slidder">
                  <div className={` ${slidderIn === true ? 'Casting-details' : slidderIn === 'out' ? 'Casting-details-out' : ''}`}>
                    <div className="img-on-left">
                      <div className="img">
                        <img src={AVATAR} alt="" />
                      </div>
                    </div>
                    <div className="text-on-right">
                      <span className="name">D-Lister</span>
                      <span className="text">Sally</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="Screen2-heading">Gave U Some Love</div>
            <div className="heart-box">
              <span>15000</span>
            </div>
            <div className="arrow-png">
                <button >
              <img  onClick={()=>  setSlidderIn('out')} src={ARROW} alt="" className="left" />
                </button>
            </div>
          </div>
      </>
    );
  };
  
  export default Screen2;
