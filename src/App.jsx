import React from "react";
import css from "./App.module.css";
import { NavLink } from "react-router-dom";
import clsx from "clsx";

const getActiveClass = ({ isActive }) =>
  clsx(css.navLink, { [css.active]: isActive });

const App = () => {

  return (
    <div>
      <header>
      <nav className={css.nav}>
        <NavLink className={getActiveClass} to="/mailbox">MailBox</NavLink>
        <NavLink className={getActiveClass} to="/products">Products</NavLink>
        <NavLink className={getActiveClass} to="/search">Search Page</NavLink>
      </nav>
      </header>
    </div>
  );
};

export default App;
