import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

function PartyLoot() {
    const navigate = useNavigate();
    const [items, setItems] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);

    useEffect(() => {
        async function fetchItems() {
            const response = await fetch('http://192.168.0.64:5000/item');
            if (response.ok) {
                const data = await response.json();
                setItems(data.items.map(item => ({
                    id: item.id,
                    session_date: item.session_date,
                    quantity: item.quantity,
                    item_name: item.name,
                    unidentified: item.unidentified,
                    item_type: item.type,
                    size: item.size,
                    avg_believed_value: item.cost,
                    who_appraised: item.who,
                })));
            }
        }

        fetchItems();
    }, []);

    const handleUpdate = () => {
        navigate(`/item-update/${selectedItems.join(",")}`);
    };
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
                    <th style={{border: '1px solid white'}}>Session Date</th>
                    <th style={{border: '1px solid white'}}>Quantity</th>
                    <th style={{border: '1px solid white'}}>Item Name</th>
                    <th style={{border: '1px solid white'}}>Unidentified</th>
                    <th style={{border: '1px solid white'}}>Type</th>
                    <th style={{border: '1px solid white'}}>Size</th>
                    <th style={{border: '1px solid white'}}>Average Believed Value</th>
                    <th style={{border: '1px solid white'}}>50% Average Believed Value</th>
                    <th style={{border: '1px solid white'}}>Who Appraised?</th>
                </tr>
                </thead>
                <tbody>
                {items.map(item => (
                    <tr key={item.id}>
                        <td style={{border: '1px solid white'}}>
                            <input type="checkbox" onChange={() => handleSelect(item)}
                                   checked={selectedItems.includes(item.id)}/>
                        </td>
                        <td style={{border: '1px solid white'}}>{new Date(item.session_date).toLocaleDateString()}</td>
                        <td style={{border: '1px solid white'}}>{item.quantity}</td>
                        <td style={{border: '1px solid white'}}>{item.item_name}</td>
                        <td style={{border: '1px solid white'}}>{item.unidentified ? 'Yes' : 'No'}</td>
                        <td style={{border: '1px solid white'}}>{item.item_type}</td>
                        <td style={{border: '1px solid white'}}>{item.size}</td>
                        <td style={{border: '1px solid white'}}>{item.avg_believed_value}</td>
                        <td style={{border: '1px solid white'}}>{item.avg_believed_value * 0.5}</td>
                        <td style={{border: '1px solid white'}}>{item.who_appraised}</td>
                    </tr>
                ))}
                </tbody>
            </table>
            <button type="button">Appraise</button>
            <button type="button">Keep Party</button>
            <button type="button">Keep Self</button>
            <button type="button">Sell</button>
            <button type="button">Trash</button>
            <button type="button" onClick={handleUpdate}>Update</button>
            <button onClick={() => setActiveComponent('GivenAwayItems')}>Given Away Items</button>
        </div>
    );
}

export default PartyLoot;