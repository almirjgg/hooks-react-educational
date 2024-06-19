import { useState } from "react"

export const CounterApp = () => {

  const [stateCounter, setCounter] = useState({
    counter1: 10,
    counter2: 20,
    counter3: 30
  })

  const {counter1, counter2, counter3} = stateCounter

  const handlerCounter = () => {
    setCounter({
      ...stateCounter,
      counter1: counter1 + 1
    })
    // setCounter(counter + 1)
  }

  return (
    <>
      <h1>CounterApp</h1>
      <p>state counter: { counter1 }</p>
      <p>state counter: { counter2 }</p>
      <p>state counter: { counter3 }</p>
      <hr />
      <button className="btn btn-primary" onClick={handlerCounter}>+1</button>
    </>
  )
}