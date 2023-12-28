import "./Countdown.css";
import React, { useState, useEffect } from "react";

const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 20);
targetDate.setHours(24, 59, 59, 0);

function Countdown() {
  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference > 0) {
      return {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        ),
        minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((difference % (1000 * 60)) / 1000),
      };
    } else {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  return (
    <div className="countView">
      <ul>
        <li>{timeLeft.days} days</li>
        <li>{timeLeft.hours} hours</li>
        <li>{timeLeft.minutes} minutes</li>
        <li>{timeLeft.seconds} seconds</li>
      </ul>
    </div>
  );
}

export default Countdown;
