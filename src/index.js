import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home.js';
import LandingPage from './pages/LandingPage.js';
import reportWebVitals from './reportWebVitals';
import ItemForm from './components/ItemForm';
import './App.css';
import GoldForm from "./components/GoldForm";
import PartyLoot from "./components/PartyLoot";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/item-input" element={<ItemForm />} />
        <Route path="/gold-input" element={<GoldForm />} />
        <Route path="/party-loot" element={<PartyLoot />} />
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
