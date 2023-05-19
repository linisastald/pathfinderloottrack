import React, { useState } from 'react';

const sizes = ["Fine", "Diminutive", "Tiny", "Small", "Medium", "Large", "Huge", "Gargantuan", "Colossal"];
const types = ["Weapon", "Armor", "Magic", "Gear", "Trade Good"];

function ItemForm() {
    const [sessionDate, setSessionDate] = useState(new Date().toISOString().slice(0, 10));
    const [items, setItems] = useState([{
        quantity: 1,
        itemName: '',
        unidentified: false,
        itemType: '',
        size: 'Medium'
    }]);

    const handleSubmit = (event) => {
        event.preventDefault();
        const itemsWithDate = items.map(item => ({...item, sessionDate}));
        console.log(itemsWithDate);
    };

    const addItem = () => {
        setItems([
            ...items,
            {
                quantity: 1,
                itemName: '',
                unidentified: false,
                itemType: '',
                size: 'Medium'
            }
        ]);
    }

    const updateItem = (index, field, value) => {
        const newItems = [...items];
        newItems[index][field] = value;
        setItems(newItems);
    }

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        width: '1000px',
        margin: '0 auto'
    };

    return (
<form onSubmit={handleSubmit} style={formStyle}>
    <div>
        <label>
            Session Date:
            <input type="date" tabIndex="1" value={sessionDate} onChange={e => setSessionDate(e.target.value)} />
        </label>
        <button type="button" tabIndex={`${2 + items.length * 5}`} onClick={addItem}>Add Item</button>
    </div>
    {items.map((item, index) => (
        <div key={index}>
            <label>
                Item Name:
                <input type="text" tabIndex={`${2 + index}`} style={{width: '200px'}} value={item.itemName} onChange={e => updateItem(index, 'itemName', e.target.value)} />
            </label>
            <label>
                Quantity:
                <input type="number" tabIndex={`${2 + items.length + index}`} style={{width: '50px'}} value={item.quantity} onChange={e => updateItem(index, 'quantity', Number(e.target.value))} />
            </label>
            <label>
                Unidentified:
                <input type="checkbox" tabIndex={`${2 + items.length * 2 + index}`} checked={item.unidentified} onChange={e => updateItem(index, 'unidentified', e.target.checked)} />
            </label>
            <label>
                Type:
                <select tabIndex={`${2 + items.length * 3 + index}`} value={item.itemType} onChange={e => updateItem(index, 'itemType', e.target.value)}>
                    {types.map(type => <option key={type} value={type}>{type}</option>)}
                </select>
            </label>
            <label>
                Size:
                <select tabIndex={`${2 + items.length * 4 + index}`} value={item.size} onChange={e => updateItem(index, 'size', e.target.value)}>
                    {sizes.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
            </label>
        </div>
    ))}
    <button type="submit" tabIndex={`${3 + items.length * 5}`}>Submit</button>
</form>


    );
}

export default ItemForm;
