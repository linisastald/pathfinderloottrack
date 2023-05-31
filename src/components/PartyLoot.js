import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';

function PartyLoot() {
    const navigate = useNavigate();
    const [items, setItems] = useState([]);
    const [selectedItems, setSelectedItems] = useState([]);
    const [characters, setCharacters] = useState([]);
    const [selectedCharacter, setSelectedCharacter] = useState('');

    async function fetchItems() {
        const response = await fetch('http://192.168.0.64:5000/item/status/none');
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

    async function fetchCharacters() {
        const response = await fetch('http://192.168.0.64:5000/character');
        if (response.ok) {
            const data = await response.json();
            setCharacters(data.characters);
        }
    }

    useEffect(() => {
        fetchItems();
        fetchCharacters();
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

    const handleStatusUpdate = async (status, who) => {
        for (let itemId of selectedItems) {
            await fetch(`http://192.168.0.64:5000/item/${itemId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({status, who}),
            });
        }
        await fetchItems();
        setSelectedItems([]);
    };
const handleSell = async () => {
    let totalSellValueInCopper = 0;
    let itemCount = 0;

    for (let itemId of selectedItems) {
        const itemResponse = await fetch(`http://192.168.0.64:5000/item/${itemId}`);
        const item = await itemResponse.json();

        // If item doesn't have an associated value, skip the rest of this iteration
        if (!item.avg_believed_value && !item.real_value) {
            continue;
        }

        let sellValue = item.avg_believed_value * 0.5; // Assume avg_believed_value is in gold

        if (item.real_value && sellValue > item.real_value * 0.5) {
            sellValue = item.real_value * 0.5;
        }

        if (item.item_type !== 'Trade Good') {
            sellValue = Math.floor(sellValue);
        }

        // Convert sellValue to copper for easier calculations
        totalSellValueInCopper += sellValue * 100; // Assuming sellValue is in gold
        itemCount++;

        await fetch(`http://192.168.0.64:5000/item/${itemId}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({status: 'Sold', who: selectedCharacter}),
        });
    }

    const totalGold = Math.floor(totalSellValueInCopper / 100);
    totalSellValueInCopper -= totalGold * 100;

    const totalSilver = Math.floor(totalSellValueInCopper / 10);
    totalSellValueInCopper -= totalSilver * 10;

    const totalCopper = totalSellValueInCopper;

    const transaction = {
        session_date: new Date().toISOString(),
        transaction_type: 'Sale',
        notes: `Sold ${itemCount} items`,
        copper: totalCopper,
        silver: totalSilver,
        gold: totalGold,
        platinum: 0
    };

    await fetch('http://192.168.0.64:5000/gold', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(transaction),
    });

    await fetchItems();
    setSelectedItems([]);
};



    return (
        <div>
            <h1>Party Loot</h1>
            <table style={{borderCollapse: 'collapse'}}>
                <thead>
                <tr>
                    <th style={{border: '1px solid white'}}></th>
                    <th style={{border: '1px solid white'}}>Session Dates</th>
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
                        <td style={{border: '1px solid white'}}>
                            {item.session_dates
                                ? [...new Set(item.session_dates)].map(date => new Date(date).toLocaleDateString()).join(', ')
                                : ''}
                        </td>
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
            <select onChange={(e) => setSelectedCharacter(e.target.value)}>
                <option value="">Select a character</option>
                {characters.map(character => (
                    <option value={character.id} key={character.id}>{character.name}</option>
                ))}
            </select>
            <button type="button">Appraise</button>
            <button type="button" onClick={() => handleStatusUpdate('Keep Party')}>Keep Party</button>
            <button type="button" onClick={() => handleStatusUpdate('Keep Self', selectedCharacter)}>Keep Self</button>
            <button type="button" onClick={handleSell}>Sell</button>
            <button type="button" onClick={() => handleStatusUpdate('Trash')}>Trash</button>
            <button type="button" onClick={handleUpdate}>Update</button>
        </div>
    );
}

export default PartyLoot;
