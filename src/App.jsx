import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage.jsx';
import MailBoxPage from './pages/MailBoxPage.jsx';
import SearchPage from './pages/SearchPage.jsx';
import ProductsPage from './pages/ProductsPage.jsx';

const App = () => {
  return (
    <header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mailbox" element={<MailBoxPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/search" element={<SearchPage />} />
      </Routes>
    </header>
  );
};

export default App;
