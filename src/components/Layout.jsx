import clsx from 'clsx';
import React from 'react'
import css from '../App.module.css'
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectAuthIsSignedIn } from '../redux/auth/selectors.js';

const getActiveClass = ({ isActive }) =>
    clsx(css.navLink, { [css.active]: isActive });

const Layout = ({children}) => {

  const isSignetIn = useSelector(selectAuthIsSignedIn)   


  return (
    <div>
          <header>
      <nav className={css.nav}>
      <NavLink className={getActiveClass} to="/">Home Page</NavLink>
        <NavLink className={getActiveClass} to="/mailbox">MailBox</NavLink>
        <NavLink className={getActiveClass} to="/products">Products</NavLink>
        <NavLink className={getActiveClass} to="/search">Search Page</NavLink>
        <NavLink className={getActiveClass} to="/drinks">Drinks</NavLink>
        <NavLink className={getActiveClass} to="/contacts">ContactsPage</NavLink>
        <NavLink className={getActiveClass} to="/login">Login</NavLink>
        <NavLink className={getActiveClass} to="/register">Register</NavLink>
      </nav>
      </header>
      <main>{children}</main>
    </div>
  )
}

export default Layout