import React, { useState, useEffect } from 'react';

interface CounterAnimationProps {
  value: number;
}

const CounterAnimation: React.FC<CounterAnimationProps> = ({ value }) => {
  const [count, setCount] = useState(0);
  const duration = 2000; // ms
  const steps = 50;
  const increment = value / steps;
  
  useEffect(() => {
    let currentCount = 0;
    const timer = setInterval(() => {
      currentCount += increment;
      if (currentCount >= value) {
        clearInterval(timer);
        setCount(value);
      } else {
        setCount(Math.floor(currentCount));
      }
    }, duration / steps);
    
    return () => clearInterval(timer);
  }, [value, increment]);
  
  return <span>{count}</span>;
};

export default CounterAnimation;