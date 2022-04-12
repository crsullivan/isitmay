import React, {useEffect, useState} from 'react';
import './App.css';

function App() {

  
  const [monthStatus, setmonthStatus] = useState()

  async function getmonthStatus() {
    if (month.getMonth() === 4) {
      setmonthStatus('Yes!')
    }
    else {
      var options = [
        'Nope',
        'Survey says: No!',
        'Probably not',
        'Yes!!! Wait... Actually no, sorry.',
        'Better luck next time!',
        'Definitely not',
        'A watched pot never boils',
        'It is not May',
        "Not for you it isn't...",
        "What even is 'a month' anyway? Seems arbitrary"
        ]
        let myoptions = options[Math.floor(Math.random() * options.length)]
        console.log(myoptions)//This gives you any string from groceries 
      setmonthStatus(myoptions)
    }
  }
  useEffect(() => {
    getmonthStatus();
    }, );

  
  const month = new Date()
  

  return (
    <div className="App">
      <header className="App-header">
      {monthStatus}
      </header>
    </div>
  );
}

export default App;
