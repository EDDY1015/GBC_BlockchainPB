import React, { useState } from 'react';
import { mockTransactions } from './mockTransactions'; 
import BlockDetails from './BlockDetails'; 
import Header from "./Header";

const Blocks = () => {
  const [selectedBlock, setSelectedBlock] = useState(null);

  const handleBlockSelect = (block) => {
    setSelectedBlock(block);
  };

  return (
    <div>
       <Header title="Blocks" />
      <ul>
        {mockTransactions.map((tx, index) => (
          <li key={index} onClick={() => handleBlockSelect(tx)}>
          
            <strong>From:</strong> {tx.source} <br />
            
          </li>
        ))}
      </ul>
      {selectedBlock && <BlockDetails block={selectedBlock} />}
    </div>
  );
};

export default Blocks;
