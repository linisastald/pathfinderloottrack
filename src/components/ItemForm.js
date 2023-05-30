import React, { useState } from 'react';
import axios from 'axios';

const sizes = ["Fine", "Diminutive", "Tiny", "Small", "Medium", "Large", "Huge", "Gargantuan", "Colossal"];
const types = ["Weapon", "Armor", "Magic", "Gear", "Trade Good", "Other"];

function ItemForm() {
    const [session_date, setSessionDate] = useState(new Date().toISOString().slice(0, 10));
    const [items, setItems] = useState([{
        quantity: 1,
        name: '',
        unidentified: false,
        type: '',
        size: 'Medium'
    }]);
    const [message, setMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        const itemsWithDate = items.map(item => ({...item, session_date}));

        for(const item of itemsWithDate) {
            try {
                await axios.post('http://192.168.0.64:5000/item', item);
                setMessage('Item(s) added!');
                setItems([{
                    quantity: 1,
                    name: '',
                    unidentified: false,
                    type: 'Other',
                    size: 'Medium'
                }]);
            } catch (error) {
                console.error('There was an error!', error);
            }
        }
    };

    const addItem = () => {
        setItems([
            ...items,
            {
                quantity: 1,
                name: '',
                unidentified: false,
                type: '',
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
                    <input type="date" tabIndex="1" value={session_date} onChange={e => setSessionDate(e.target.value)} />
                </label>
                <button type="button" tabIndex={`${2 + items.length * 5}`} onClick={addItem}>Add Item</button>
            </div>
            {items.map((item, index) => (
                <div key={index}>
                    <label>
                        Item Name:
                        <input type="text" tabIndex={`${2 + index}`} style={{width: '200px'}} value={item.name} onChange={e => updateItem(index, 'name', e.target.value)} />
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
                        <select tabIndex={`${2 + items.length * 3 + index}`} value={item.type} onChange={e => updateItem(index, 'type', e.target.value)}>
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
            {message && <div>{message}</div>}
        </form>
    );
}

export default ItemForm;
