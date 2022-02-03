import React,{useState,useEffect} from 'react';

const CounterApp = () => {
const [counter , setCounter] = useState(0);


const incrementCounter =()=>{
    setCounter(counter +1 );
}

    return (
        <div>
        <button onClick={incrementCounter}>
            incrementar
        </button>
            <h1>CLicks{counter}</h1>
        </div>
    );
};


export default CounterApp;