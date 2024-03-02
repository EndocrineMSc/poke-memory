import '../App.css';
import { useState, useEffect, useRef } from 'react';
import { eventHandler, MON_CLICKED } from '../eventHandler';

function Counter() {
  const [counter, setCounter] = useState(0);
  const [best, setBest] = useState(Number(JSON.parse(localStorage.getItem('best-score')) || 0));
  const [showModal, setShowModal] = useState(false);
  const ref = useRef();

  useEffect(() => {
    eventHandler.subscribe(MON_CLICKED, handleCounter);
    return () => {
      eventHandler.remove(MON_CLICKED, handleCounter);
    };
  }, []);

  useEffect(() => {
    if (showModal) {
      ref.current?.showModal();
    } else {
      ref.current?.close();
    }
  }, [showModal]);

  const handleCounter = (isCorrectMon) => {
    if (isCorrectMon) {
      iterateCounter();
    } else {
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setCounter(0);
  };

  const iterateCounter = () => {
    setCounter((prevCounter) => {
      const newCounter = prevCounter + 1;

      if (newCounter > best) {
        localStorage.setItem('best-score', JSON.stringify(newCounter));
        setBest(newCounter);
      }

      return newCounter;
    });
  };

  return (
    <>
      <div className="counterContainer">
        <div className="counter">{`Current Count: ${counter}`}</div>
        <div className="best">{`Best: ${best}`}</div>
      </div>
      <dialog
        className="gameOver"
        ref={ref}
        onCancel={closeModal}
      >
        Game Over -
        {' '}
        Final Count:
        {' '}
        {counter}
        <button
          type="button"
          onClick={closeModal}
        >
          Ok
        </button>
      </dialog>
    </>
  );
}

export default Counter;
