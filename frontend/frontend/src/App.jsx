import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Feed from './components/Feed';
import PanierPage from './components/PanierPage';
import { CartProvider } from './components/CartContext';
import HomePage from './components/HomePage';

function App() {
  return (
    <>
    <HomePage/>
    </>
  );
}

export default App;
