import '../App.css';
import { useState, useEffect } from 'react';
import { eventHandler, MON_CLICKED } from '../eventHandler';

function Counter() {
  const [counter, setCounter] = useState(0);
  const [best, setBest] = useState(0);

  useEffect(() => {
    eventHandler.subscribe(MON_CLICKED, handleCounter);
    return () => {
      eventHandler.remove(MON_CLICKED, handleCounter);
    };
  }, []);

  const handleCounter = (isCorrectMon) => {
    if (isCorrectMon) {
      iterateCounter();
    } else {
      setCounter(0);
    }
  };

  const iterateCounter = () => {
    setCounter((prevCounter) => {
      const newCounter = prevCounter + 1;

      if (newCounter > best) {
        setBest(newCounter);
      }

      return newCounter;
    });
  };

  return (
    <div className="counterContainer">
      <div className="counter">{`Current Count: ${counter}`}</div>
      <div className="best">{`Best: ${best}`}</div>
    </div>
  );
}

export default Counter;
