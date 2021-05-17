import './App.css'
import Header from './components/header';

function App() {
  const data='Jagal Ser'
  return (
    <div className ='hello'>
    
    <h1>Hello,World!</h1>
    <Header data={data}/>
    <p>{data}</p>
    </div>
  );
}

export default App;
