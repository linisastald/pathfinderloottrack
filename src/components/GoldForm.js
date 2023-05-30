import React, { useState } from 'react';
import axios from 'axios';

const transactionTypes = ["Withdrawal", "Deposit", "Purchase", "Sale", "Party Loot Purchase"];

function GoldForm() {
    const [sessionDate, setSessionDate] = useState(new Date().toISOString().slice(0, 10));
    const [transactions, setTransactions] = useState([
        { transactionType: '', notes: '', copper: 0, silver: 0, gold: 0, platinum: 0 },
    ]);

    const handleInputChange = (index, event) => {
        const values = [...transactions];
        if (event.target.name === "copper" || event.target.name === "silver" || event.target.name === "gold" || event.target.name === "platinum") {
            values[index][event.target.name] = parseInt(event.target.value);
        } else {
            values[index][event.target.name] = event.target.value;
        }
        setTransactions(values);
    };

    const handleAddClick = () => {
        setTransactions([...transactions, { transactionType: '', notes: '', copper: 0, silver: 0, gold: 0, platinum: 0 }]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        for (const transaction of transactions) {
            transaction.sessionDate = sessionDate;
            try {
                await axios.post('http://192.168.0.64:5000/gold', transaction);
            } catch (error) {
                console.error('There was an error!', error);
            }
        }
        setTransactions([{ transactionType: '', notes: '', copper: 0, silver: 0, gold: 0, platinum: 0 }]);
    };

    // Check if at least one transaction has total > 0.
    const isSubmitDisabled = !transactions.some(transaction => transaction.copper + transaction.silver * 10 + transaction.gold * 100 + transaction.platinum * 1000 > 0);

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Session Date:
                    <input type="date" value={sessionDate} onChange={e => setSessionDate(e.target.value)} />
                </label>
                <button type="button" onClick={handleAddClick}>Add new transaction</button>
            </div>
            {transactions.map((transaction, index) => (
                <div key={index}>
                    <label>
                        Transaction Type:
                        <select name="transactionType" value={transaction.transactionType} onChange={event => handleInputChange(index, event)}>
                            <option value="">--Please choose an option--</option>
                            {transactionTypes.map(type => (
                                <option key={type} value={type}>
                                    {type}
                                </option>
                            ))}
                        </select>
                    </label>
                    <label>
                        Copper:
                        <input type="number" name="copper" style={{width: '50px'}} value={transaction.copper} onChange={event => handleInputChange(index, event)} />
                    </label>
                    <label>
                        Silver:
                        <input type="number" name="silver" style={{width: '50px'}} value={transaction.silver} onChange={event => handleInputChange(index, event)} />
                    </label>
                    <label>
                        Gold:
                        <input type="number" name="gold" style={{width: '50px'}} value={transaction.gold} onChange={event => handleInputChange(index, event)} />
                    </label>
                    <label>
                        Platinum:
                        <input type="number" name="platinum" style={{width: '50px'}} value={transaction.platinum} onChange={event => handleInputChange(index, event)} />
                    </label>
                    <label>
                        Notes:
                        <input type="text" name="notes" value={transaction.notes} onChange={event => handleInputChange(index, event)} />
                    </label>
                    <p>Total: {transaction.copper + transaction.silver * 10 + transaction.gold * 100 + transaction.platinum * 1000}</p>
                </div>
            ))}
            <button type="submit" disabled={isSubmitDisabled}>Submit</button>
        </form>
    );
}

export default GoldForm;
