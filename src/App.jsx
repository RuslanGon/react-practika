import React from "react";
import css from "./App.module.css";
import { NavLink, Route, Routes } from "react-router-dom";
import clsx from "clsx";
import MailBoxPage from "./pages/MailBoxPage.jsx";
import ProductsPage from "./pages/ProductsPage.jsx";
import SearchPage from "./pages/SearchPage.jsx";
import DrinksPage from "./pages/DrinksPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import ProductDetailsPage from "./pages/ProductDetailsPage.jsx";
import CommentsPage from "./pages/CommentsPage.jsx";
import ViewPage from "./pages/ViewPage.jsx";

const getActiveClass = ({ isActive }) =>
  clsx(css.navLink, { [css.active]: isActive });

const App = () => {

  return (
    <div>
      <header>
      <nav className={css.nav}>
      <NavLink className={getActiveClass} to="/">Home Page</NavLink>
        <NavLink className={getActiveClass} to="/mailbox">MailBox</NavLink>
        <NavLink className={getActiveClass} to="/products">Products</NavLink>
        <NavLink className={getActiveClass} to="/search">Search Page</NavLink>
        <NavLink className={getActiveClass} to="/drinks">Drinks</NavLink>
      </nav>
      </header>
      <main>
        <Routes>
        <Route path="/" element={<HomePage />} />
           <Route path="/mailbox" element={<MailBoxPage />} />
           <Route path="/products" element={<ProductsPage />} />
           <Route path="/products/:productId/*" element={<ProductDetailsPage />} />
           <Route path="/*" element={<CommentsPage />} />
           <Route path="/view" element={<ViewPage />} />
           <Route path="/search" element={<SearchPage />} />
           <Route path="/drinks" element={<DrinksPage />} />
           <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
