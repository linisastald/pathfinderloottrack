import React, { useState } from 'react';

function SoldItems() {
    const [items, setItems] = useState([
        {id: 1, session_date: '2023-05-01', sold_on: '2023-05-10', quantity: 2, item_name: 'Sword', item_type: 'Weapon', size: 'Medium', avg_believed_value: 50, sold_for: 45},
        // ... similarly update other items as per the new fields
    ]);

    return (
        <div>
            <h1>Sold Items</h1>
            <table style={{borderCollapse: 'collapse'}}>
                <thead>
                <tr>
                    <th style={{border: '1px solid white'}}>Session Date</th>
                    <th style={{border: '1px solid white'}}>Sold On</th>
                    <th style={{border: '1px solid white'}}>Quantity</th>
                    <th style={{border: '1px solid white'}}>Item Name</th>
                    <th style={{border: '1px solid white'}}>Type</th>
                    <th style={{border: '1px solid white'}}>Size</th>
                    <th style={{border: '1px solid white'}}>Average Believed Value</th>
                    <th style={{border: '1px solid white'}}>50% Average Believed Value</th>
                    <th style={{border: '1px solid white'}}>Sold For</th>
                </tr>
                </thead>
                <tbody>
                {items.map(item => (
                    <tr key={item.id}>
                        <td style={{border: '1px solid white'}}>{new Date(item.session_date).toLocaleDateString()}</td>
                        <td style={{border: '1px solid white'}}>{new Date(item.sold_on).toLocaleDateString()}</td>
                        <td style={{border: '1px solid white'}}>{item.quantity}</td>
                        <td style={{border: '1px solid white'}}>{item.item_name}</td>
                        <td style={{border: '1px solid white'}}>{item.item_type}</td>
                        <td style={{border: '1px solid white'}}>{item.size}</td>
                        <td style={{border: '1px solid white'}}>{item.avg_believed_value}</td>
                        <td style={{border: '1px solid white'}}>{item.avg_believed_value * 0.5}</td>
                        <td style={{border: '1px solid white'}}>{item.sold_for}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
}

export default SoldItems;
