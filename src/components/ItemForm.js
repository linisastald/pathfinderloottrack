import React, { useState } from 'react';

const sizes = ["Fine", "Diminutive", "Tiny", "Small", "Medium", "Large", "Huge", "Gargantuan", "Colossal"];
const types = ["Weapon", "Armor", "Magic", "Gear", "Trade Good"];

function ItemForm() {
    const [sessionDate, setSessionDate] = useState(new Date().toISOString().slice(0, 10));
    const [quantity, setQuantity] = useState(1);
    const [itemName, setItemName] = useState('');
    const [unidentified, setUnidentified] = useState(false);
    const [itemType, setItemType] = useState('');
    const [size, setSize] = useState('Medium');

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
                Item Name:
                <input type="text" style={{width: '200px'}} value={itemName} onChange={e => setItemName(e.target.value)} />
            </label>
            <label>
                Quantity:
                <input type="number" style={{width: '50px'}} value={quantity} onChange={e => setQuantity(Number(e.target.value))} />
            </label>
            <label>
                Unidentified:
                <input type="checkbox" checked={unidentified} onChange={e => setUnidentified(e.target.checked)} />
            </label>
            <label>
                Type:
                <select value={itemType} onChange={e => setItemType(e.target.value)}>
                    {types.map(type => <option key={type} value={type}>{type}</option>)}
                </select>
            </label>
            <label>
                Size:
                <select value={size} onChange={e => setSize(e.target.value)}>
                    {sizes.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
            </label>
            <button type="submit">Submit</button>
        </form>
    );
}

export default ItemForm;
