import {useState} from 'react';
import './App.css';

export default function App() {
  return(
    <div className='App'>
      <Counter/>
    </div>
    //<div className="App">
      //<Counter />
    //</div>
  );
}

function Counter() {
  const [step, setStep] = useState(1)
  const [count, setCount] = useState(0);

  const date = new Date();
  date.setDate(date.getDate() + count);

  function handleClick(){
    setStep(1)
    setCount(0)
  }

  return(
    <div>

      <div>
        <input type="range" min="0" max="10" 
        value = {step} 
        onChange={e => setStep(Number(e.target.value))}
        />
       
        <span>Step: {step}</span>
        
      </div>

      <div>
        <button onClick={() => setCount((c) => (c - step))}>-</button>
        <input type='text' 
        value={count} 
        onChange={e => setCount((Number(e.target.value)))}
        />
        <button onClick={() => setCount((c) => (c + step))}>+</button>
      </div>

      <span>
      {count === 0 ? 
        "Todays date is " : count > 0 ? 
        `${count} days from today is ` : 
        `${Math.abs(count)} days ago would be `}
      </span>
      <span>{date.toDateString()}</span>
     
      
      {count !== 0 || step !== 1 ?(
        <div>
          <button onClick={handleClick}>Reset</button>
      </div> 
      ) : null }
        
    </div>
  )
}
