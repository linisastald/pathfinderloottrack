import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Welcome to Pathfinder Party Management</h1>
      <div className="links">
        <Link to="./components/item-input"><button>Item Input</button></Link>
        <Link to="./components/gold-input"><button>Gold Input</button></Link>
        <Link to="./components/gold-transactions"><button>Gold Transactions</button></Link>
        <Link to="./components/party-loot"><button>Party Loot</button></Link>
        <Link to="./components/party-owned-items"><button>Party Owned Items</button></Link>
        <Link to="./components/kept-items"><button>Kept Items</button></Link>
        <Link to="./components/sold-items"><button>Sold Items</button></Link>
        <Link to="./components/given-away-items"><button>Given Away Items</button></Link>
      </div>
    </div>
  );
};

export default LandingPage;
