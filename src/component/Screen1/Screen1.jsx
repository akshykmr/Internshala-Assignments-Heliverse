import React, { useState, useEffect } from 'react';
import HOST from '../../assest/girlClap.png';
import PODIUM from '../../assest/awardPlatform.png';
import LEFTCURTON from '../../assest/curtain-left.png';
import RIGHTCURTON from '../../assest/curtain-right.png';
import './Screen1.scss';

const Screen1 = () => {
  const [timer, setTimer] = useState({
    hours: 4,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimer((prevTimer) => {
        const { hours, minutes, seconds } = prevTimer;
        let newHours = hours;
        let newMinutes = minutes;
        let newSeconds = seconds - 1;
        if (newSeconds < 0) {
          newMinutes -= 1;
          newSeconds = 59;
        }
        if (newMinutes < 0) {
          newHours = 4;
          newMinutes = 52;
        }
        return {
          hours: newHours,
          minutes: newMinutes,
          seconds: newSeconds,
        };
      });
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  const { hours, minutes, seconds } = timer;
  const formattedTime = `${formatTime(hours)}:${formatTime(
    minutes
  )}:${formatTime(seconds)}`;

  return (
    <>
      <div className="main-contanier">
        <div className="curtons">
          <img src={LEFTCURTON} alt="" className="left" />
          <img src={RIGHTCURTON} alt="" className="right" />
        </div>
        <div className="stage-background">
          <div className="clapperboard">
            <span className="counter">
              <p>{formattedTime}</p>
            </span>
            <span className="text1">casting call</span>
            <span className="text2">The Results R In!</span>
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

export default Screen1;
