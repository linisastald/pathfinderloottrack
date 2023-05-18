import React, {useEffect, useState} from 'react';
import apiService from '../../../loottracker/frontend/src/services/apiService';

function PartyOwnedItems() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const itemsData = await apiService.getPartyOwnedItems();
                setItems(itemsData);
            } catch (error) {
                console.error('Error fetching items:', error);
            }
        };
        fetchItems();
    }, []);

    return (
        <div>
            <h1>Party Owned Items</h1>
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

export default PartyOwnedItems;
