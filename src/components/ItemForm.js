import React, { useState } from 'react';

const sizes = ["Fine", "Diminutive", "Tiny", "Small", "Medium", "Large", "Huge", "Gargantuan", "Colossal"];
const types = ["Weapon", "Armor", "Magic", "Gear", "Trade Good"];

function ItemForm() {
    const [items, setItems] = useState([{
        sessionDate: new Date().toISOString().slice(0, 10),
        quantity: 1,
        itemName: '',
        unidentified: false,
        itemType: '',
        size: 'Medium'
    }]);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(items);
    };

    const addItem = () => {
        setItems([
            ...items,
            {
                sessionDate: new Date().toISOString().slice(0, 10),
                quantity: 1,
                itemName: '',
                unidentified: false,
                itemType: '',
                size: 'Medium'
            }
        ]);
    }

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        width: 'auto',
        margin: '0 auto'
    };

    // TODO: Add JSX for rendering item inputs


return (
    <form onSubmit={handleSubmit} style={formStyle}>
        {items.map((item, index) => (
            <div key={index}>
                <label>
                    Session Date:
                    <input type="date" value={item.sessionDate} onChange={e => updateItem(index, 'sessionDate', e.target.value)} />
                </label>
                <label>
                    Item Name:
                    <input type="text" style={{width: '200px'}} value={item.itemName} onChange={e => updateItem(index, 'itemName', e.target.value)} />
                </label>
                <label>
                    Quantity:
                    <input type="number" style={{width: '50px'}} value={item.quantity} onChange={e => updateItem(index, 'quantity', Number(e.target.value))} />
                </label>
                <label>
                    Unidentified:
                    <input type="checkbox" checked={item.unidentified} onChange={e => updateItem(index, 'unidentified', e.target.checked)} />
                </label>
                <label>
                    Type:
                    <select value={item.itemType} onChange={e => updateItem(index, 'itemType', e.target.value)}>
                        {types.map(type => <option key={type} value={type}>{type}</option>)}
                    </select>
                </label>
                <label>
                    Size:
                    <select value={item.size} onChange={e => updateItem(index, 'size', e.target.value)}>
                        {sizes.map(s => <option key={s} value={s}>{s}</option>)}
                    </select>
                </label>
            </div>
        ))}
        <button type="button" onClick={addItem}>Add Item</button>
        <button type="submit">Submit</button>
    </form>
);

const updateItem = (index, field, value) => {
    const newItems = [...items];
    newItems[index][field] = value;
    setItems(newItems);
}


}

export default ItemForm;
