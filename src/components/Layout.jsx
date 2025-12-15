import clsx from "clsx";
import React from "react";
import css from "../App.module.css";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectAuthIsSignedIn, selectAuthUserData } from "../redux/auth/selectors.js";
import { apiLogout } from "../redux/auth/operations.js";

const getActiveClass = ({ isActive }) =>
  clsx(css.navLink, { [css.active]: isActive });

const Layout = ({ children }) => {
  const dispath = useDispatch()
  const isSignetIn = useSelector(selectAuthIsSignedIn);
  const userData = useSelector(selectAuthUserData)

  const handleLogout = () => {
    dispath(apiLogout())
  }

  return (
    <div>
      <header>
        <nav className={css.nav}>
          <NavLink className={getActiveClass} to="/">
            Home Page
          </NavLink>
          {isSignetIn ? (
            <>
              <NavLink className={getActiveClass} to="/mailbox">
                MailBox
              </NavLink>
              <NavLink className={getActiveClass} to="/products">
                Products
              </NavLink>
              <NavLink className={getActiveClass} to="/search">
                Search Page
              </NavLink>
              <NavLink className={getActiveClass} to="/drinks">
                Drinks
              </NavLink>
              <NavLink className={getActiveClass} to="/contacts">
                ContactsPage
              </NavLink>
              <div
                style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                <p>Hi {userData.name}</p>
                <button onClick={handleLogout} type="button">Logout</button>
              </div>
            </>
          ) : (
            <>
              {" "}
              <NavLink className={getActiveClass} to="/login">
                Login
              </NavLink>
              <NavLink className={getActiveClass} to="/register">
                Register
              </NavLink>
            </>
          )}
        </nav>
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
