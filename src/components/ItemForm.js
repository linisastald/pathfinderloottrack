import React, { useState } from 'react';

function ItemForm() {
    const [sessionDate, setSessionDate] = useState(new Date().toISOString().slice(0, 10));
    const [quantity, setQuantity] = useState(1);
    const [itemName, setItemName] = useState('');
    const [unidentified, setUnidentified] = useState(false);
    const [itemType, setItemType] = useState('');
    const [size, setSize] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        const itemData = {
            session_date: sessionDate,
            quantity,
            item_name: itemName,
            unidentified,
            item_type: itemType,
            size,
        };

        console.log(itemData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Session Date:
                <input type="date" value={sessionDate} onChange={e => setSessionDate(e.target.value)} />
            </label>
            <label>
                Quantity:
                <input type="number" value={quantity} onChange={e => setQuantity(Number(e.target.value))} />
            </label>
            <label>
                Item Name:
                <input type="text" value={itemName} onChange={e => setItemName(e.target.value)} />
            </label>
            <label>
                Unidentified:
                <input type="checkbox" checked={unidentified} onChange={e => setUnidentified(e.target.checked)} />
            </label>
            <label>
                Type:
                <input type="text" value={itemType} onChange={e => setItemType(e.target.value)} />
            </label>
            <label>
                Size:
                <input type="text" value={size} onChange={e => setSize(e.target.value)} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

export default ItemForm;
