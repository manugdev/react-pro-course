import { useState } from "react"

interface Props {
  initialValue?: number;
}

interface Counter {
  counter: number,
  clicks: number
}

export const CounterBy = ({ initialValue = 5 }: Props) => {

  const [ { counter, clicks }, setCounter ] = useState<Counter>({
    counter: initialValue,
    clicks: 0
  })

  const handleClick = (value: number) => {
    setCounter(({ clicks, counter }) => ({
      counter: counter + value,
      clicks: clicks + 1
    }))
  }

  return (
    <>
      <h1>CounterBy</h1>
      <h2>Counter: {counter} </h2>
      <h2>Clicks: {clicks} </h2>
      <button onClick={() => handleClick(1)}>+1</button>
      <button onClick={() => handleClick(5)}>+5</button>
    </>
  )
}
