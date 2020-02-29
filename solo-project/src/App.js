import React from 'react';
import logo from './hou_ming_11_dbl.png';
import './App.css';
import CardDeck from 'react-bootstrap/CardDeck'
import Log from './Log';
import Book from './Book';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CardDeck>
        <Log/>
        <Book/>
        </CardDeck>
      </header>
      <div>
      </div>
    </div>
  );
}

export default App;
