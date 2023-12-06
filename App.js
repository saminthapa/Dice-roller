import { useState } from 'react';
import './index.css';


function App() {
  const [diceNumber, setDiceNumber] = useState(1)
  const refreshDice =()=>{
    const ranno = Math.floor(Math.random()*6)+1
  setDiceNumber(ranno)
  }
  return (
    <div>
      <center>
      <h1>Dice Roller</h1><hr></hr>
      <img width={300} height={300} src={require(`./image/${diceNumber}.png`)}></img><br/>
     <button onClick={()=> refreshDice()} className='button' >Roll</button>
      </center>
    </div>
  );
}

export default App;
