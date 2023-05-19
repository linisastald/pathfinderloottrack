import React, {useState} from 'react';

function PartyLoot() {
const [items, setItems] = useState([
    {id: 1, session_date: '2023-05-01', quantity: 2, item_name: 'Sword', unidentified: false, item_type: 'Weapon', size: 'Medium', avg_believed_value: 50, who_appraised: 'John'},
    {id: 2, session_date: '2023-05-02', quantity: 1, item_name: 'Armor', unidentified: true, item_type: 'Armor', size: 'Large', avg_believed_value: 100, who_appraised: 'Jane'},
    {id: 3, session_date: '2023-05-03', quantity: 3, item_name: 'Wand', unidentified: false, item_type: 'Magic', size: 'Small', avg_believed_value: 75, who_appraised: 'Bob'},
    {id: 4, session_date: '2023-05-04', quantity: 1, item_name: 'Axe', unidentified: false, item_type: 'Weapon', size: 'Large', avg_believed_value: 80, who_appraised: 'Alice'},
    {id: 5, session_date: '2023-05-05', quantity: 5, item_name: 'Cloak', unidentified: true, item_type: 'Gear', size: 'Medium', avg_believed_value: 60, who_appraised: 'John'},
    {id: 6, session_date: '2023-05-06', quantity: 2, item_name: 'Ring', unidentified: false, item_type: 'Magic', size: 'Tiny', avg_believed_value: 120, who_appraised: 'Jane'},
    {id: 7, session_date: '2023-05-07', quantity: 4, item_name: 'Helmet', unidentified: true, item_type: 'Armor', size: 'Medium', avg_believed_value: 70, who_appraised: 'Bob'},
    {id: 8, session_date: '2023-05-08', quantity: 1, item_name: 'Boots', unidentified: false, item_type: 'Gear', size: 'Small', avg_believed_value: 40, who_appraised: 'Alice'},
    {id: 9, session_date: '2023-05-09', quantity: 3, item_name: 'Amulet', unidentified: false, item_type: 'Magic', size: 'Small', avg_believed_value: 130, who_appraised: 'John'},
    {id: 10, session_date: '2023-05-10', quantity: 5, item_name: 'Potion', unidentified: true, item_type: 'Magic', size: 'Tiny', avg_believed_value: 25, who_appraised: 'Alice'},
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