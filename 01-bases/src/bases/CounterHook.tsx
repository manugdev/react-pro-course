import { useCounter } from '../hooks/useCounter';

const CounterHook = () => {

  const { counter, handleClick, counterElement} = useCounter({ maxCount: 5});

  return (
    <>
      <h1>Counter hook:</h1>
      <h2 ref={ counterElement }>{ counter }</h2>
      <button onClick={handleClick}>
        +1
      </button>
    </>
  )
}

export default CounterHook