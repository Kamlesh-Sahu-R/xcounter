import './Counter.css';
import {useState} from "react";

function Counter() {

    const [countValue, setCountValue] = useState(0);

    const increment = () =>{

        setCountValue(countValue + 1);
    };

    const decrement = () =>{
        
        setCountValue(countValue - 1);
    };


  return (
    <div className="counter">
      <h1>Counter App</h1>
      <h4>Cont: {countValue}</h4>
      <div>
        <button onClick={increment}> Increment</button>
        <button onClick={decrement}>Decrement</button>
      </div>
    </div>
  );
}

export default Counter;