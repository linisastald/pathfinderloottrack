import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import { addMonths } from 'date-fns';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

function GoldTransactions() {
    const [transactions, setTransactions] = useState([]);
    const [startDate, setStartDate] = useState(addMonths(new Date(), -3));
    const [endDate, setEndDate] = useState(new Date());

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('http://192.168.0.64:5000/gold');
                setTransactions(response.data);
            } catch (error) {
                console.error('There was an error!', error);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const filteredTransactions = transactions.filter(transaction => {
            const transactionDate = new Date(transaction.session_date);
            return transactionDate >= startDate && transactionDate <= endDate;
        });
        setTransactions(filteredTransactions);
    }, [startDate, endDate]);

    const totalCopper = transactions.reduce((total, transaction) => total + transaction.copper, 0);
    const totalSilver = transactions.reduce((total, transaction) => total + transaction.silver, 0);
    const totalGold = transactions.reduce((total, transaction) => total + transaction.gold, 0);
    const totalPlatinum = transactions.reduce((total, transaction) => total + transaction.platinum, 0);
    const totalValue = totalCopper/100 + totalSilver/10 + totalGold + totalPlatinum*10;

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
