import React from "react";
import css from "./App.module.css";
import { Routes, Route, NavLink } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import MailBoxPage from "./pages/MailBoxPage.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";

const App = () => {
  return (
    <div>
      <header>
      <nav className={css.nav}>
      <NavLink className={css.navlink} to="/mailbox">MailBox</NavLink>
        <NavLink className={css.navlink} to="/products">Products</NavLink>
        <NavLink className={css.navlink} to="/search">Search Page</NavLink>
      </nav>
      </header>
    </div>
  );
};

export default App;
