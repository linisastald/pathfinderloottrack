import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Welcome to Pathfinder Party Management</h1>
      <div className="links">
        <Link to="./components/ItemForm"><button>Item Input</button></Link>
        <Link to="./components/GoldForm"><button>Gold Input</button></Link>
        <Link to="./components/GoldTransactions"><button>Gold Transactions</button></Link>
        <Link to="./components/PartyLoot"><button>Party Loot</button></Link>
        <Link to="./components/PartyOwnedItems"><button>Party Owned Items</button></Link>
        <Link to="./components/KeptItems"><button>Kept Items</button></Link>
        <Link to="./components/SoldItems"><button>Sold Items</button></Link>
        <Link to="./components/GivenAwayItems"><button>Given Away Items</button></Link>
      </div>
    </div>
  );
};

export default LandingPage;
