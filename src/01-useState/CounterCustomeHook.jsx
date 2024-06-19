import { useCounter } from '../hooks/useCounter';

export const CounterCustomeHook = () => {
  const {
    counter,
    handlerCounterIncrement,
    handlerCounterReset,
    handlerCounterDecrement,
  } = useCounter();

  return (
    <>
      <div>CounterCustomeHook: {counter}</div>
      <hr />
      <button
        className='btn btn-primary'
        onClick={() => handlerCounterIncrement(2)}
      >
        +1
      </button>
      <button className='btn btn-primary' onClick={handlerCounterReset}>
        Reset
      </button>
      <button
        className='btn btn-primary'
        onClick={() => handlerCounterDecrement(2)}
      >
        -1
      </button>
    </>
  );
};
