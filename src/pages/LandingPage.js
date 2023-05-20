import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PartyLoot from '../components/PartyLoot';
import GoldTransactions from '../components/GoldTransactions';
import ItemForm from '../components/ItemForm';
import GoldForm from '../components/GoldForm';
//import PartyOwnedItems from '../components/PartyOwnedItems';
//import KeptItems from '../components/KeptItems';
//import SoldItems from '../components/SoldItems';
//import GivenAwayItems from '../components/GivenAwayItems';

const LandingPage = () => {
    const [activeComponent, setActiveComponent] = useState('');
    const [campaigns, setCampaigns] = useState([]);
    const [characters, setCharacters] = useState([]);
    const [selectedCampaign, setSelectedCampaign] = useState(null);

    useEffect(() => {
        axios.get('/campaign')
          .then(response => setCampaigns(response.data.campaigns))
          .catch(error => console.error(error));
    }, []);

    useEffect(() => {
        if (selectedCampaign) {
          axios.get(`/character?campaign_id=${selectedCampaign}`)
            .then(response => setCharacters(response.data.characters))
            .catch(error => console.error(error));
        }
    }, [selectedCampaign]);

    const handleCampaignChange = (event) => {
        setSelectedCampaign(event.target.value);
    };
    const renderComponent = (componentName) => {
        switch(componentName) {
            case 'ItemForm':
                return <ItemForm />;
            case 'GoldForm':
                return <GoldForm />;
            case 'GoldTransactions':
                return <GoldTransactions />;
            case 'PartyLoot':
                return <PartyLoot />;
            case 'PartyOwnedItems':
            //    return <PartyOwnedItems />;
            case 'KeptItems':
            //    return <KeptItems />;
            case 'SoldItems':
            //    return <SoldItems />;
            case 'GivenAwayItems':
            //    return <GivenAwayItems />;
            default:
                return null;
        }
    };

    return (
        <div className="landing-page">
            <h1>Welcome to Pathfinder Party Management</h1>
            <div className="links">
                <button onClick={() => setActiveComponent('ItemForm')}>Item Input</button>
                <button onClick={() => setActiveComponent('GoldForm')}>Gold Input</button>
                <button onClick={() => setActiveComponent('GoldTransactions')}>Gold Transactions</button>
                <button onClick={() => setActiveComponent('PartyLoot')}>Party Loot</button>
                <button onClick={() => setActiveComponent('PartyOwnedItems')}>Party Owned Items</button>
                <button onClick={() => setActiveComponent('KeptItems')}>Kept Items</button>
                <button onClick={() => setActiveComponent('SoldItems')}>Sold Items</button>
                <button onClick={() => setActiveComponent('GivenAwayItems')}>Given Away Items</button>
            </div>
            <div className="selectors">
                <select onChange={handleCampaignChange}>
                    <option>Select Campaign</option>
                    {campaigns.map(campaign =>
                      <option key={campaign.id} value={campaign.id}>{campaign.name}</option>
                    )}
                </select>
                {selectedCampaign && (
                    <select>
                        <option>Select Character</option>
                        {characters.map(character =>
                          <option key={character.id} value={character.id}>{character.name}</option>
                        )}
                    </select>
                )}
            </div>

            {renderComponent(activeComponent)}
        </div>
    );
};

export default LandingPage;
