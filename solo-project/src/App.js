import React from 'react';
import logo from './hou_ming_11_dbl.png';
import './App.css';
import Log from './Log';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Log/>
      </header>
      <div>
      </div>
    </div>
  );
}

export default App;
