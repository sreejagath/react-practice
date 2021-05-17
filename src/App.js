import {useState} from 'react'
import './App.css'
import Counter from './compo'


function App() {
  const [count,setCount]=useState(0)
  const addCount=()=>{
    setCount(count+1)
    console.log(count);
  }
  return (
    <div className ='hello'>
    <button onClick={addCount}>Add</button>
    <Counter title='1st counter' count={count}/>
    <Counter title='2nd counter' count={count+1}/>
    </div>
  );
}

export default App;
