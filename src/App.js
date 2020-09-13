import React from 'react';
import Home from './pages/Home';
import 'typeface-roboto';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <label className="btn todo-btn">TODO App</label>
      <Home />
    </div>
  );
}

export default App;
