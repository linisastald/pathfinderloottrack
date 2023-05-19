import React, { useState } from 'react';

function GoldForm() {
    const [sessionDate, setSessionDate] = useState(new Date().toISOString().slice(0, 10));
    const [transactionType, setTransactionType] = useState('');
    const [notes, setNotes] = useState('');
    const [copper, setCopper] = useState(0);
    const [silver, setSilver] = useState(0);
    const [gold, setGold] = useState(0);
    const [platinum, setPlatinum] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();

        const goldData = {
            session_date: sessionDate,
            transaction_type: transactionType,
            notes,
            copper,
            silver,
            gold,
            platinum,
        };

        console.log(goldData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Session Date:
                <input type="date" value={sessionDate} onChange={e => setSessionDate(e.target.value)} />
            </label>
            <label>
                Transaction Type:
                <input type="text" value={transactionType} onChange={e => setTransactionType(e.target.value)} />
            </label>
            <label>
                Notes:
                <textarea value={notes} onChange={e => setNotes(e.target.value)} />
            </label>
            <label>
                Copper:
                <input type="number" value={copper} onChange={e => setCopper(Number(e.target.value))} />
            </label>
            <label>
                Silver:
                <input type="number" value={silver} onChange={e => setSilver(Number(e.target.value))} />
            </label>
            <label>
                Gold:
                <input type="number" value={gold} onChange={e => setGold(Number(e.target.value))} />
            </label>
            <label>
                Platinum:
                <input type="number" value={platinum} onChange={e => setPlatinum(Number(e.target.value))} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

export default GoldForm;
