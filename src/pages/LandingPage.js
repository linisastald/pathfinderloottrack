import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Welcome to Pathfinder Party Management</h1>
      <div className="links">
        <Link to="/item-input"><button>Item Input</button></Link>
        <Link to="/gold-input"><button>Gold Input</button></Link>
        <Link to="/gold-transactions"><button>Gold Transactions</button></Link>
        <Link to="/party-loot"><button>Party Loot</button></Link>
        <Link to="/party-owned-items"><button>Party Owned Items</button></Link>
        <Link to="/kept-items"><button>Kept Items</button></Link>
        <Link to="/sold-items"><button>Sold Items</button></Link>
        <Link to="/given-away-items"><button>Given Away Items</button></Link>
      </div>
    </div>
  );
};

export default LandingPage;
