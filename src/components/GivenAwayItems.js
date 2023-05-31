import React, {useEffect, useState} from 'react';


function GivenAwayItems() {

    const [items, setItems] = useState([]);

    async function fetchItems() {
        const response = await fetch('http://192.168.0.64:5000/item/status/Trash');
        if (response.ok) {
            const data = await response.json();
            const items = data.items.map(item => ({
                id: item.id,
                session_date: item.session_date,
                quantity: item.quantity,
                item_name: item.name,
                unidentified: item.unidentified,
                item_type: item.type,
                size: item.size,
                avg_believed_value: item.cost,
                who_appraised: item.who,
            }));

            const newItems = [];

            items.forEach(item => {
                const existingItem = newItems.find(i => i.item_name === item.item_name && i.item_type === item.item_type && i.size === item.size);
                if (existingItem) {
                    existingItem.quantity += item.quantity;
                    existingItem.session_dates.push(item.session_date);
                } else {
                    newItems.push({
                        ...item,
                        session_dates: [item.session_date],
                    });
                }
            });

            setItems(newItems);
        }
    }



    useEffect(() => {
        fetchItems();
    }, []);


    return (
        <div>
            <h1>Party Loot</h1>
            <table style={{borderCollapse: 'collapse'}}>
                <thead>
                <tr>
                    <th style={{border: '1px solid white'}}>Session Dates</th>
                    <th style={{border: '1px solid white'}}>Quantity</th>
                    <th style={{border: '1px solid white'}}>Item Name</th>
                    <th style={{border: '1px solid white'}}>Type</th>
                    <th style={{border: '1px solid white'}}>Size</th>
                </tr>
                </thead>
                <tbody>
                {items.map(item => (
                    <tr key={item.id}>
                        <td style={{border: '1px solid white'}}>
                            {item.session_dates
                                ? [...new Set(item.session_dates)].map(date => new Date(date).toLocaleDateString()).join(', ')
                                : ''}
                        </td>
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
