import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PartyLoot from './PartyLoot';
import GoldTransactions from './GoldTransactions';
import ItemInput from './ItemInput';
import GoldInput from './GoldInput';
import PartyOwnedItems from './PartyOwnedItems';
import KeptItems from './KeptItems';
import SoldItems from './SoldItems';
import GivenAwayItems from './GivenAwayItems';

const LandingPage = () => {
    const [activeComponent, setActiveComponent] = useState('');

    const renderComponent = (componentName) => {
        switch(componentName) {
            case 'ItemInput':
                return <ItemInput />;
            case 'GoldInput':
                return <GoldInput />;
            case 'GoldTransactions':
                return <GoldTransactions />;
            case 'PartyLoot':
                return <PartyLoot />;
            case 'PartyOwnedItems':
                return <PartyOwnedItems />;
            case 'KeptItems':
                return <KeptItems />;
            case 'SoldItems':
                return <SoldItems />;
            case 'GivenAwayItems':
                return <GivenAwayItems />;
            default:
                return null;
        }
    };

    return (
        <div className="landing-page">
            <h1>Welcome to Pathfinder Party Management</h1>
            <div className="links">
                <button onClick={() => setActiveComponent('ItemInput')}>Item Input</button>
                <button onClick={() => setActiveComponent('GoldInput')}>Gold Input</button>
                <button onClick={() => setActiveComponent('GoldTransactions')}>Gold Transactions</button>
                <button onClick={() => setActiveComponent('PartyLoot')}>Party Loot</button>
                <button onClick={() => setActiveComponent('PartyOwnedItems')}>Party Owned Items</button>
                <button onClick={() => setActiveComponent('KeptItems')}>Kept Items</button>
                <button onClick={() => setActiveComponent('SoldItems')}>Sold Items</button>
                <button onClick={() => setActiveComponent('GivenAwayItems')}>Given Away Items</button>
            </div>
            {renderComponent(activeComponent)}
        </div>
    );
};

export default LandingPage;
