import React, {useEffect, useState} from 'react';
import './App.css';

function App() {

  
  const [monthStatus, setmonthStatus] = useState()

  async function getmonthStatus() {
    if (month.getMonth() === 4) {
      setmonthStatus('Yes')
    }
    else {
      setmonthStatus('Survey says: No')
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
