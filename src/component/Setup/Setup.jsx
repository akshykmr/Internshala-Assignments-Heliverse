// import React, { useState, useEffect } from 'react';
import HOST from './../../assest/girlClap.png';
import PODIUM from './../../assest/awardPlatform.png';
import LEFTCURTON from './../../assest/curtain-left.png';
import RIGHTCURTON from './../../assest/curtain-right.png';
import './Setup.scss'
// import Screen1 from './../Screen1/Screen1'
import Screen2 from './../Screen2/Screen2'
import Screen3 from './../Screen3/Screen3'

const Setup = () => {

  return (
    <>
      <div className="main-contanier">
        {/* <div className="curtons">
          <img src={LEFTCURTON} alt="" className="left" />
          <img src={RIGHTCURTON} alt="" className="right" />
        </div> */}
        <div className="stage-background">
            <div className="screen">
                {/* <Screen1/> */}
                {/* <Screen2/> */}
                <Screen3/>
            </div>
        <div className="host">
            <img src={HOST} alt="" />
          </div>
        </div>
        <div className="podium">
          <img src={PODIUM} alt="" />
         
        </div>
      </div>
    </>
  );
};

export default Setup;
