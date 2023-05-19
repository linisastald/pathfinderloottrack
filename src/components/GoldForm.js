import React, { useState } from 'react';

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

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log({ sessionDate, transactions });
    };

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
                        <input type="text" name="transactionType" value={transaction.transactionType} onChange={event => handleInputChange(index, event)} />
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
                    <p>Total: {transaction.copper/100 + transaction.silver/10 + transaction.gold + transaction.platinum*10}</p>

                </div>
            ))}
            <button type="submit">Submit</button>
        </form>
    );
}

export default GoldForm;
