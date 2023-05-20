import React, {useState} from 'react';

function PartyOwnedItems() {
    const [items, setItems] = useState([
        {id: 1, session_date: '2023-05-01', quantity: 2, item_name: 'Sword', item_type: 'Weapon', size: 'Medium', who_has_it: 'John', where_is_it: 'Backpack'}

    ]);

    const [selectedItems, setSelectedItems] = useState([]);

    const handleSelect = (item) => {
        if (selectedItems.includes(item.id)) {
            setSelectedItems(selectedItems.filter(id => id !== item.id));
        } else {
            setSelectedItems([...selectedItems, item.id]);
        }
    };

    return (
        <div>
            <h1>Party Owned Items</h1>
            <table style={{borderCollapse: 'collapse'}}>
                <thead>
                <tr>
                    <th style={{border: '1px solid white'}}>Select</th>
                    <th style={{border: '1px solid white'}}>Session Date</th>
                    <th style={{border: '1px solid white'}}>Quantity</th>
                    <th style={{border: '1px solid white'}}>Item Name</th>
                    <th style={{border: '1px solid white'}}>Type</th>
                    <th style={{border: '1px solid white'}}>Size</th>
                    <th style={{border: '1px solid white'}}>Who Has it?</th>
                    <th style={{border: '1px solid white'}}>Where is it?</th>
                </tr>
                </thead>
                <tbody>
                {items.map(item => (
                    <tr key={item.id}>
                        <td style={{border: '1px solid white'}}>
                            <input type="checkbox" onChange={() => handleSelect(item)} checked={selectedItems.includes(item.id)} />
                        </td>
                        <td style={{border: '1px solid white'}}>{new Date(item.session_date).toLocaleDateString()}</td>
                        <td style={{border: '1px solid white'}}>{item.quantity}</td>
                        <td style={{border: '1px solid white'}}>{item.item_name}</td>
                        <td style={{border: '1px solid white'}}>{item.item_type}</td>
                        <td style={{border: '1px solid white'}}>{item.size}</td>
                        <td style={{border: '1px solid white'}}>{item.who_has_it}</td>
                        <td style={{border: '1px solid white'}}>{item.where_is_it}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <button type="button">Keep Self</button>
            <button type="button">Sell</button>
            <button type="button">Trash</button>
            <button type="button">Update</button>
        </div>
    );
}

export default PartyOwnedItems;
