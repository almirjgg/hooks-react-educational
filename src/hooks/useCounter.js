import { useState } from 'react';

export const useCounter = (initialValue = 10) => {
  const [counter, setCounter] = useState(initialValue);

  const handlerCounterIncrement = (val = 1) => {
    setCounter(ctr => ctr + val);
  };

  const handlerCounterDecrement = () => {
    setCounter(ctr => ctr - val);
  };

  const handlerCounterReset = (val = 1) => {
    setCounter(initialValue);
  };

  return {
    counter,
    handlerCounterIncrement,
    handlerCounterReset,
    handlerCounterDecrement,
  };
};
