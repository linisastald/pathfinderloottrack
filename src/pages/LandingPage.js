import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Welcome to Pathfinder Party Management</h1>
      <div className="links">
        <Link to="/item-input">Item Input</Link>
        <Link to="/gold-input">Gold Input</Link>
        <Link to="/gold-transactions">Gold Transactions</Link>
        <Link to="/party-loot">Party Loot</Link>
        <Link to="/party-owned-items">Party Owned Items</Link>
        <Link to="/kept-items">Kept Items</Link>
        <Link to="/sold-items">Sold Items</Link>
        <Link to="/given-away-items">Given Away Items</Link>
      </div>
    </div>
  );
};

export default LandingPage;