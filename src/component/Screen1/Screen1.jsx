import React, { useState, useEffect } from 'react';
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
     <div className="screen1">
            <span className="counter">
              <p>{formattedTime}</p>
            </span>
            <span className="text1">casting call</span>
            <span className="text2">The Results R In!</span>
          </div>
    </>
  );
};

export default Screen1;
