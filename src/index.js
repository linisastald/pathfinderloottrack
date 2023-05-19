import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.js';
import LandingPage from './pages/LandingPage.js';
import reportWebVitals from './reportWebVitals';
import ItemForm from './components/ItemForm';
import './App.css';
import GoldForm from "./components/GoldForm";
import GoldTransactions from "./components/GoldTransactions";
import PartyLoot from "./components/PartyLoot";
import PartyOwnedItems from "./components/PartyOwnedItems";
import KeptItems from "./components/KeptItems";
import SoldItems from "./components/SoldItems";
import GivenAwayItems from "./components/GivenAwayItems";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" component={LandingPage} />
        <Route path="/item-input" component={ItemForm} />
        <Route path="/gold-input" component={GoldForm} />
        <Route path="/gold-transactions" component={GoldTransactions} />
        <Route path="/party-loot" component={PartyLoot} />
        <Route path="/party-owned-items" component={PartyOwnedItems} />
        <Route path="/kept-items" component={KeptItems} />
        <Route path="/sold-items" component={SoldItems} />
        <Route path="/given-away-items" component={GivenAwayItems} />
      </Routes>
    </BrowserRouter>
  )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();