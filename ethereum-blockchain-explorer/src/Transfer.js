import React, { useState } from 'react';
import Header from './Header';
import { mockTransactions } from './mockTransactions'; 

const Transfer = () => {
  const [amount, setAmount] = useState('');
  const [toAddress, setToAddress] = useState('');
  const [fromAddress, setFromAddress] = useState('');
  const [showReceipt, setShowReceipt] = useState(false);
  const [receipt, setReceipt] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newReceipt = {
      from: fromAddress,
      to: toAddress,
      amount
    };
    setReceipt(newReceipt);
    setShowReceipt(true);
  };

  const handleCancel = () => {
    setAmount('');
    setToAddress('');
    setFromAddress('');
    setShowReceipt(false);
  };

  return (
    <div>
      <Header title="Transfer" />
      <form onSubmit={handleSubmit}>
        <select value={fromAddress} onChange={(e) => setFromAddress(e.target.value)}>
          <option value="">Select From Address</option>
          {mockTransactions.map((tx, index) => (
            <option key={index} value={tx.source}>
              {tx.source}
            </option>
          ))}
        </select>

        <select value={toAddress} onChange={(e) => setToAddress(e.target.value)}>
          <option value="">Select To Address</option>
          {mockTransactions.map((tx, index) => (
            <option key={index} value={tx.destination}>
              {tx.destination}
            </option>
          ))}
        </select>

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button type="submit">Submit</button>
        <button type="button" onClick={handleCancel}>Cancel</button>
      </form>

      {showReceipt && (
        <div className='receipt'>
          <h3>Receipt</h3>
          <p>From: {receipt.from}</p>
          <p>To: {receipt.to}</p>
          <p>Amount: {receipt.amount} ETH</p>
        </div>
      )}
    </div>
  );
};

export default Transfer;
