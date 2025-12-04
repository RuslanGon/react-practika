import React, { Suspense, lazy } from "react";
import css from "./App.module.css";
import { NavLink, Route, Routes } from "react-router-dom";
import clsx from "clsx";
import Loader from "./components/Loader.jsx";
const MailBoxPage = lazy(() => import("./pages/MailBoxPage.jsx"));
const ProductsPage = lazy(() => import("./pages/ProductsPage.jsx"));
const SearchPage = lazy(() => import("./pages/SearchPage.jsx"));
const DrinksPage = lazy(() => import("./pages/DrinksPage.jsx"));
const HomePage = lazy(() => import("./pages/HomePage.jsx"));
const NotFoundPage = lazy(() => import("./pages/NotFoundPage.jsx"));
const ProductDetailsPage = lazy(() => import("./pages/ProductDetailsPage.jsx"));
const CommentsPage = lazy(() => import("./pages/CommentsPage.jsx"));
const ViewPage = lazy(() => import("./pages/ViewPage.jsx"));

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
      <Suspense fallback={<Loader />}>
        <Routes>
        <Route path="/" element={<HomePage />} />
           <Route path="/mailbox" element={<MailBoxPage />} />
           <Route path="/products" element={<ProductsPage />} />
           <Route path="/products/:productId/*" element={<ProductDetailsPage />} />
           <Route path="/comments" element={<CommentsPage />} />
           <Route path="/view" element={<ViewPage />} />
           <Route path="/search" element={<SearchPage />} />
           <Route path="/drinks" element={<DrinksPage />} />
           <Route path="*" element={<NotFoundPage />} />
        </Routes>
        </Suspense>
      </main>
    </div>
  );
};

export default App;
