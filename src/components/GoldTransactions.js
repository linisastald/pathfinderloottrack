import React, { useState } from 'react';

function GoldTransactions() {
    const [transactions, setTransactions] = useState([
        { id: 1, session_date: '2023-05-01', transaction_type: 'Earned', notes: 'Loot from the dungeon', copper: 10, silver: 20, gold: 2, platinum: 0 },
        { id: 2, session_date: '2023-05-02', transaction_type: 'Spent', notes: 'Bought new gear', copper: 5, silver: 10, gold: 1, platinum: 0 },
        { id: 3, session_date: '2023-05-03', transaction_type: 'Earned', notes: 'Sold old gear', copper: 15, silver: 25, gold: 3, platinum: 0 },
        { id: 4, session_date: '2023-05-04', transaction_type: 'Spent', notes: 'Inn and food', copper: 2, silver: 5, gold: 0, platinum: 0 },
        { id: 5, session_date: '2023-05-05', transaction_type: 'Earned', notes: 'Completed quest', copper: 20, silver: 30, gold: 5, platinum: 1 },
    ]);

    return (
        <div>
            <h1>Gold Transactions</h1>
            <table>
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Type</th>
                    <th>Notes</th>
                    <th>Copper</th>
                    <th>Silver</th>
                    <th>Gold</th>
                    <th>Platinum</th>
                </tr>
                </thead>
                <tbody>
                {transactions.map(transaction => (
                    <tr key={transaction.id}>
                        <td>{new Date(transaction.session_date).toLocaleDateString()}</td>
                        <td>{transaction.transaction_type}</td>
                        <td>{transaction.notes}</td>
                        <td>{transaction.copper}</td>
                        <td>{transaction.silver}</td>
                        <td>{transaction.gold}</td>
                        <td>{transaction.platinum}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default GoldTransactions;
