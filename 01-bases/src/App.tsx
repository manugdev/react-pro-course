import { Counter, CounterBy, CounterEffect } from "./bases";
import CounterHook from "./bases/CounterHook";
import CounterReducerComponent from "./counter-reducer/CounterReducer";

function App() {
  return (
    <>
      <h1>React</h1>
      <Counter initialValue={15} />
      <CounterBy/>
      <CounterEffect />
      <CounterHook />
      <CounterReducerComponent />
    </>
  );
}

export default App;
