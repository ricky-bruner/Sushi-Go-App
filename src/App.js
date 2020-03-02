import React from 'react';
import logo from './img/wasabi.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Testing</h1>
      <div className="card-container">
        <div className="card">
          <div className="wasabi-card">
            <img src={logo} className="main-card-img" alt="wasabi" />

          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
