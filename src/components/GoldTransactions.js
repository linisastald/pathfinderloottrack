import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import { subMonths } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';


function GoldTransactions() {
    const [transactions, setTransactions] = useState([
        { id: 1, session_date: '2023-05-01', transaction_type: 'Withdrawal', notes: 'Loot from the dungeon', copper: 10, silver: 20, gold: 2, platinum: 0 },
        { id: 2, session_date: '2023-05-02', transaction_type: 'Deposit', notes: 'Bought new gear', copper: 5, silver: 10, gold: 1, platinum: 0 },
        { id: 3, session_date: '2023-05-03', transaction_type: 'Purchase', notes: 'Sold old gear', copper: 15, silver: 25, gold: 3, platinum: 0 },
        { id: 4, session_date: '2023-05-04', transaction_type: 'Sale', notes: 'Inn and food', copper: 2, silver: 5, gold: 0, platinum: 0 },
        { id: 5, session_date: '2023-05-05', transaction_type: 'Party Loot Purchase', notes: 'Completed quest', copper: 20, silver: 30, gold: 5, platinum: 1 },
    ]);

    const totalCopper = transactions.reduce((total, transaction) => total + transaction.copper, 0);
    const totalSilver = transactions.reduce((total, transaction) => total + transaction.silver, 0);
    const totalGold = transactions.reduce((total, transaction) => total + transaction.gold, 0);
    const totalPlatinum = transactions.reduce((total, transaction) => total + transaction.platinum, 0);
    const totalValue = totalCopper/100 + totalSilver/10 + totalGold + totalPlatinum*10;
    const filteredTransactions = transactions.filter(transaction => {
        const transactionDate = new Date(transaction.session_date);
        return transactionDate >= startDate && transactionDate <= endDate;
    });
    return (
        <div>
            <h1>Gold Transactions</h1>
            <div>
                <DatePicker selected={startDate} onChange={date => setStartDate(date)} selectsStart startDate={startDate} endDate={endDate} />
                <DatePicker selected={endDate} onChange={date => setEndDate(date)} selectsEnd startDate={startDate} endDate={endDate} minDate={startDate} />
            </div>
            <table style={{borderCollapse: 'collapse'}}>
                <thead>
                <tr>
                    <th style={{border: '1px solid white'}}>Date</th>
                    <th style={{border: '1px solid white'}}>Type</th>
                    <th style={{border: '1px solid white'}}>Notes</th>
                    <th style={{border: '1px solid white'}}>Copper</th>
                    <th style={{border: '1px solid white'}}>Silver</th>
                    <th style={{border: '1px solid white'}}>Gold</th>
                    <th style={{border: '1px solid white'}}>Platinum</th>
                    <th style={{border: '1px solid white'}}>Total</th>
                </tr>
                </thead>
                <tbody>
                {transactions.map(transaction => (
                    <tr key={transaction.id}>
                        <td style={{border: '1px solid white'}}>{new Date(transaction.session_date).toLocaleDateString()}</td>
                        <td style={{border: '1px solid white'}}>{transaction.transaction_type}</td>
                        <td style={{border: '1px solid white'}}>{transaction.notes}</td>
                        <td style={{border: '1px solid white'}}>{transaction.copper}</td>
                        <td style={{border: '1px solid white'}}>{transaction.silver}</td>
                        <td style={{border: '1px solid white'}}>{transaction.gold}</td>
                        <td style={{border: '1px solid white'}}>{transaction.platinum}</td>
                        <td style={{border: '1px solid white'}}>{transaction.copper/100 + transaction.silver/10 + transaction.gold + transaction.platinum*10}</td>
                    </tr>
                ))}
                </tbody>
            </table>

            <h2>Running Totals</h2>
            <table style={{borderCollapse: 'collapse'}}>
                <thead>
                <tr>
                    <th style={{border: '1px solid white'}}>Copper</th>
                    <th style={{border: '1px solid white'}}>Silver</th>
                    <th style={{border: '1px solid white'}}>Gold</th>
                    <th style={{border: '1px solid white'}}>Platinum</th>
                    <th style={{border: '1px solid white'}}>Total</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td style={{border: '1px solid white'}}>{totalCopper}</td>
                    <td style={{border: '1px solid white'}}>{totalSilver}</td>
                    <td style={{border: '1px solid white'}}>{totalGold}</td>
                    <td style={{border: '1px solid white'}}>{totalPlatinum}</td>
                    <td style={{border: '1px solid white'}}>{totalValue}</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
}

export default GoldTransactions;
