import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import LandingPage from './pages/LandingPage';
import ItemForm from './components/ItemForm';
import GoldForm from './components/GoldForm';
import GoldTransactions from './components/GoldTransactions';
import PartyLoot from './components/PartyLoot';
import PartyOwnedItems from './components/PartyOwnedItems';
import KeptItems from './components/KeptItems';
import SoldItems from './components/SoldItems';
import GivenAwayItems from './components/GivenAwayItems';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/item-input" component={ItemForm} />
        <Route path="/gold-input" component={GoldForm} />
        <Route path="/gold-transactions" component={GoldTransactions} />
        <Route path="/party-loot" component={PartyLoot} />
        <Route path="/party-owned-items" component={PartyOwnedItems} />
        <Route path="/kept-items" component={KeptItems} />
        <Route path="/sold-items" component={SoldItems} />
        <Route path="/given-away-items" component={GivenAwayItems} />
      </Switch>
    </Router>
  );
};

export default App;
