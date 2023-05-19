import React, {useState} from 'react';

function PartyLoot() {
    const [items, setItems] = useState([
        {id: 1, session_date: '2023-05-01', quantity: 2, item_name: 'Sword', unidentified: false, item_type: 'Weapon', size: 'Medium'},
        {id: 2, session_date: '2023-05-03', quantity: 1, item_name: 'Ring of Protection', unidentified: true, item_type: 'Magic', size: 'Small'},
        {id: 3, session_date: '2023-05-07', quantity: 3, item_name: 'Potion', unidentified: false, item_type: 'Gear', size: 'Small'},
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
            <h1>Party Loot</h1>
            <table style={{borderCollapse: 'collapse'}}>
                <thead>
                <tr>
                    <th style={{border: '1px solid white'}}>Select</th>
                    {/* ...rest of headers... */}
                </tr>
                </thead>
                <tbody>
                {items.map(item => (
                    <tr key={item.id}>
                        <td style={{border: '1px solid white'}}>
                            <input type="checkbox" onChange={() => handleSelect(item)} checked={selectedItems.includes(item.id)} />
                        </td>
                        {/* ...rest of cells... */}
                    </tr>
                ))}
                </tbody>
            </table>
            <button type="button">Appraise</button>
            <button type="button">Keep Party</button>
            <button type="button">Keep Self</button>
            <button type="button">Sell</button>
            <button type="button">Trash</button>
            <button type="button">Update</button>
        </div>
    );
}

export default PartyLoot;