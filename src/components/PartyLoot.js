import React, {useState} from 'react';

function PartyLoot() {
    const [items, setItems] = useState([
        {id: 1, session_date: '2023-05-01', quantity: 2, item_name: 'Sword', unidentified: false, item_type: 'Weapon', size: 'Medium'},
        {id: 2, session_date: '2023-05-03', quantity: 1, item_name: 'Ring of Protection', unidentified: true, item_type: 'Magic', size: 'Small'},
        {id: 3, session_date: '2023-05-07', quantity: 3, item_name: 'Potion', unidentified: false, item_type: 'Gear', size: 'Small'},
    ]);

    return (
        <div>
            <h1>Party Loot</h1>
            <table>
                <thead>
                <tr>
                    <th>Date</th>
                    <th>Quantity</th>
                    <th>Item Name</th>
                    <th>Unidentified</th>
                    <th>Type</th>
                    <th>Size</th>
                </tr>
                </thead>
                <tbody>
                {items.map(item => (
                    <tr key={item.id}>
                        <td>{new Date(item.session_date).toLocaleDateString()}</td>
                        <td>{item.quantity}</td>
                        <td>{item.item_name}</td>
                        <td>{item.unidentified ? 'Yes' : 'No'}</td>
                        <td>{item.item_type}</td>
                        <td>{item.size}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default PartyLoot;
