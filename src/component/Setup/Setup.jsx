import { useState, useEffect } from 'react';
import HOST from './../../assest/girlClap.png';
import PODIUM from './../../assest/awardPlatform.png';
import LEFTCURTON from './../../assest/curtain-left.png';
import RIGHTCURTON from './../../assest/curtain-right.png';
import Screen1 from './../Screen1/Screen1';
import Screen2 from './../Screen2/Screen2';
import Screen3 from './../Screen3/Screen3';
import './Setup.scss';

const Setup = () => {
  const [screen1Visible, setScreen1Visible] = useState(true);
  const [screen2Visible, setScreen2Visible] = useState(false);
  const [screen3Visible, setScreen3Visible] = useState(false);
  const [screenIn, setScreenIN] = useState(true);

  useEffect(() => {
    // Show Screen 2 after 3 seconds
    const screen2Timeout = setTimeout(() => {
      setScreen1Visible(false);
      setScreen2Visible(true);
    }, 4000);
    // Clean the timeouts
    return () => clearTimeout(screen2Timeout);
  }, [screen1Visible]);

  useEffect(() => {
    // Show Screen 3 after 20 seconds
    const screen3Timeout = setTimeout(() => {
      setScreen2Visible(false);
      setScreen3Visible(true);
      setScreenIN(true);
    }, 8000);
  
    // Clean the timeouts
    return () => clearTimeout(screen3Timeout);
  }, [screen2Visible]);

  useEffect(() => {
    if (screen2Visible || screen3Visible) {
      setScreenIN(false);
    }
  }, [screen2Visible, screen3Visible]);

  const handleBackToScreen1 = () => {
    // setScreen3Visible(false);
    // setScreen1Visible(true);
    window.location.reload();
  };

  return (
    <div className={`${screenIn ? 'main-container' : 'main-container-in'}`}>
      <div className="curtons">
        <img src={LEFTCURTON} alt="" className="left" />
        <img src={RIGHTCURTON} alt="" className="right" />
      </div>
      <div className="stage-background">
        <div className="screen">
          {screen1Visible && <Screen1 />}
          {screen2Visible && <Screen2 />}
          {screen3Visible && <Screen3 handleBackToScreen1={handleBackToScreen1} />}
        </div>
        <div className="host">
          <img src={HOST} alt="" />
        </div>
      </div>
      <div className="podium">
        <img src={PODIUM} alt="" />
      </div>
    </div>
  );
};

export default Setup;
