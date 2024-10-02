import React from "react";
import Header from "./Header";
import { mockTransactions } from "./mockTransactions";

const Transactions = () => {

    

    return (
        <div>
           <Header title="Transactions" />
            <ul>
                {mockTransactions.map((tx, index) => (
                    <li key={index}>
                        <strong>Source:</strong> {tx.source}, 
                        <strong> Destination:</strong> {tx.destination}, 
                        <strong> Amount:</strong> {tx.amount} ETH, 
                        <strong> Status:</strong> {tx.status}, 
                        <strong> Gas Used:</strong> {tx.gasUsed}, 
                        <strong> Hash:</strong> {tx.receiptHash}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Transactions;
