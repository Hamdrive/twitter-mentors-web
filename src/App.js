import './App.css';
import { useState, useEffect } from 'react'

function App() {

  const [message, setMsg] = useState([])
  const [username, setUsername] = useState('')


  function getData() {

    fetch(`/.netlify/functions/node-fetch?username=${username}`)
      .then((x) => x.json())
      .then(({ msg }) => {
        console.log(msg.data);
        return setMsg(`${msg.data.id} ${msg.data.name}`)
      })
  }



  return (
    <div className="App">
      <h2>Twitter Wrap</h2>

      <div className="input">
        <input type="text" placeholder='Username' onChange={(e) => setUsername(e.target.value)} />

      </div>
      <button type="submit" onClick={() => getData()}>Fetch</button>
      <div className="output">
        {message}
      </div>
    </div>
  );
}

export default App;
