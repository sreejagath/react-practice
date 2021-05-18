import {useState} from 'react'
import './App.css'
import Counter from './compo'


function App() {
  const [count,setCount]=useState(0)
  const addCount=()=>{
    setCount(count+1)
    console.log(count);
  }
  let obj ={
    title:'Number',
    count
  }
  return (
    <div className ='hello'>
    
    <Counter {...obj}/>
    <Counter title='Square' count={count*count}/>
    <center><button onClick={addCount}>Click</button></center>
    </div>
  );
}

export default App;
