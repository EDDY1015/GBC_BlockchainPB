// BlockDetails.js
import React from 'react';

const BlockDetails = ({ block }) => {
  return (
    <div className='block'>
      <h3>Block Details</h3>
      <table>
        <tbody>
          <tr>
            <td><strong>Source:</strong></td>
            <td>{block.source}</td>
          </tr>
          <tr>
            <td><strong>Destination:</strong></td>
            <td>{block.destination}</td>
          </tr>
          <tr>
            <td><strong>Amount:</strong></td>
            <td>{block.amount} ETH</td>
          </tr>
          <tr>
            <td><strong>Status:</strong></td>
            <td>{block.status}</td>
          </tr>
          <tr>
            <td><strong>Gas Used:</strong></td>
            <td>{block.gasUsed}</td>
          </tr>
          <tr>
            <td><strong>Receipt Hash:</strong></td>
            <td>{block.receiptHash}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default BlockDetails; // Ensure this is correct
