import {useState} from 'react';
import './App.css';

export default function App() {
  return(
    <div>
      <Counter/>
    </div>
  );
}

function Counter() {
  const [step, setStep] = useState(1)
  const [count, setCount] = useState(0);

  const date = new Date('December 12 2023');
  date.setDate(date.getDate() + count);

  return(
    <div>

      <div>
        <button onClick={() => setStep((c) => (c - 1))}>-</button>
        <span>Step: {step}</span>
        <button onClick={() => setStep((c) => (c + 1))}>+</button>
      </div>
      <div>
        <button onClick={() => setCount((c) => (c - step))}>-</button>
        <span>Count: {count}</span>
        <button onClick={() => setCount((c) => (c + step))}>+</button>
      </div>

      <span>
      {count === 0 ? 
        "Todays date is " : count > 0 ? 
        `${count} days from today is ` : 
        `${Math.abs(count)} days ago would be `}
      </span>
      <span>{date.toDateString()}</span>
    </div>
  )
}
