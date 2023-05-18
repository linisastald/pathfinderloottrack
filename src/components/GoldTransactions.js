import React, {useEffect, useState} from 'react';
import apiService from '../../../loottracker/frontend/src/services/apiService';

function GoldTransactions() {
    const [transactions, setTransactions] = useState([]);

    useEffect(() => {
        const fetchTransactions = async () => {
            try {
                const transactionsData = await apiService.getGoldTransactions();
                setTransactions(transactionsData);
            } catch (error) {
                console.error('Error fetching transactions:', error);
            }
        };
        fetchTransactions();
    }, []);

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
