import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Transfer from './Transfer';
import Transactions from './Transactions';
import Blocks from './Blocks';
import Home from './Home';
import './App.css';

function App() {

  return (
    <Router>
      
        <h1> Ethereum Explorer</h1>
        <nav>
          <ul className="nav-links">
          <li><Link to="/home">Home</Link></li>
            <li><Link to="/transfer">Transfer</Link></li>
            <li><Link to="/transactions">Transactions</Link></li>
            <li><Link to="/blocks">Blocks</Link></li>
          </ul>
        </nav>
        
        
      
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
        <Route path="/transfer" element={<Transfer />} />
        <Route path="/transactions" element={<Transactions />} />
        <Route path="/blocks" element={<Blocks />} />
      </Routes>
    </Router>
   
  );
}

export default App;
