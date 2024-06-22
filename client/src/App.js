import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from 'react';
import axios from "axios"


function App() {
  const [data, setData] = useState(null);
  console.log("process.env.REACT_APP_URL_HOST", process.env.REACT_APP_URL_HOST)
  const onSend = async () => {
    await axios.post(`${process.env.REACT_APP_URL_HOST}/api/createUser`, {username: "sdfsf",email: "tanmay.nayak@interopay.com", password: 'sfsdf0'}).then(res => {
      console.log("res", res)
    }).catch(err => {
      console.log("err", err)
    })
  }
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={onSend}>send</button>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
