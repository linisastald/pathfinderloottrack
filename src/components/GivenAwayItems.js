import React, { useState } from 'react';

function GivenAwayItems() {
    const [items, setItems] = useState([
        {id: 1, session_date: '2023-05-01', quantity: 2, item_name: 'Sword', item_type: 'Weapon', size: 'Medium'},
        // ... similarly update other items as per the new fields
    ]);

    return (
        <div>
            <h1>Given Away Items</h1>
            <table style={{borderCollapse: 'collapse'}}>
                <thead>
                <tr>
                    <th style={{border: '1px solid white'}}>Session Date</th>
                    <th style={{border: '1px solid white'}}>Quantity</th>
                    <th style={{border: '1px solid white'}}>Item Name</th>
                    <th style={{border: '1px solid white'}}>Type</th>
                    <th style={{border: '1px solid white'}}>Size</th>
                </tr>
                </thead>
                <tbody>
                {items.map(item => (
                    <tr key={item.id}>
                        <td style={{border: '1px solid white'}}>{new Date(item.session_date).toLocaleDateString()}</td>
                        <td style={{border: '1px solid white'}}>{item.quantity}</td>
                        <td style={{border: '1px solid white'}}>{item.item_name}</td>
                        <td style={{border: '1px solid white'}}>{item.item_type}</td>
                        <td style={{border: '1px solid white'}}>{item.size}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default GivenAwayItems;
