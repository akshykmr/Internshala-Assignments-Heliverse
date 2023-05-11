import React from 'react'
import AVATAR from "../../../assest/avtar2.png";
import './CastSlidder.scss';

const CastSlidder = ({setSlidderCast}) => {
  return (
    <>
      <div className="Casting-details">
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
    </>
  )
}

export default CastSlidder
