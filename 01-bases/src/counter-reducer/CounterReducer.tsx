import { useReducer } from "react"
import { CounterState } from "./interfaces/interfaces";
import { counterReducer } from "./state/counterReducer";
import * as CounterActions from "./actions/actions";

const INITIAL_STATE: CounterState = {
  counter: 0,
  previous: 0,
  changes: 0
}

const CounterReducerComponent = () => {

  const [{counter, previous, changes}, dispatch] = useReducer(counterReducer, INITIAL_STATE)

  const handleReset = () => {
    dispatch(CounterActions.doReset())
  }

  const handleIncrease = (value: number) => {
    dispatch(CounterActions.doIncreaseBy(value))
  }

  return (
    <>
      <h1>Counter Reducer: {counter}</h1>
      <h2>Previous: {previous}</h2>
      <h2>Changes: {changes}</h2>
      <button onClick={handleReset}>
        Reset
      </button>
      <button onClick={() => handleIncrease(5)}>
        Increase by 5
      </button>
    </>
  )
}

export default CounterReducerComponent