import React from 'react';
import { useParams } from "react-router-dom";

const sizes = ["Fine", "Diminutive", "Tiny", "Small", "Medium", "Large", "Huge", "Gargantuan", "Colossal"];
const types = ["Weapon", "Armor", "Magic", "Gear", "Trade Good"];

function ItemUpdate({items, onItemUpdate}) {
    const { id } = useParams();
    const itemIds = id.split(",").map(Number);
    const selectedItems = items.filter(item => itemIds.includes(item.id));

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        width: '1000px',
        margin: '0 auto'
    };

    const updateItem = (index, field, value) => {
        const newItems = [...selectedItems];
        newItems[index][field] = value;
        onItemUpdate(newItems);
    }

    return (
        <form style={formStyle}>
            {selectedItems.map((item, index) => (
                <div key={index}>
                    <label>
                        Item Name:
                        <input type="text" tabIndex={`${1 + index}`} style={{width: '200px'}} value={item.itemName} onChange={e => updateItem(index, 'itemName', e.target.value)} />
                    </label>
                    <label>
                        Quantity:
                        <input type="number" tabIndex={`${1 + items.length + index}`} style={{width: '50px'}} value={item.quantity} onChange={e => updateItem(index, 'quantity', Number(e.target.value))} />
                    </label>
                    <label>
                        Unidentified:
                        <input type="checkbox" tabIndex={`${1 + items.length * 2 + index}`} checked={item.unidentified} onChange={e => updateItem(index, 'unidentified', e.target.checked)} />
                    </label>
                    <label>
                        Type:
                        <select tabIndex={`${1 + items.length * 3 + index}`} value={item.itemType} onChange={e => updateItem(index, 'itemType', e.target.value)}>
                            {types.map(type => <option key={type} value={type}>{type}</option>)}
                        </select>
                    </label>
                    <label>
                        Size:
                        <select tabIndex={`${1 + items.length * 4 + index}`} value={item.size} onChange={e => updateItem(index, 'size', e.target.value)}>
                            {sizes.map(s => <option key={s} value={s}>{s}</option>)}
                        </select>
                    </label>
                </div>
            ))}
        </form>
    );
}

export default ItemUpdate;
