import React from 'react';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={css.container}>
      <h1 className={css.title}>Welcome to React Practice</h1>
      <p className={css.subtitle}>
        This is a training project where you practice routing, UI, API requests, and components.
      </p>

      <div className={css.cards}>
        <div className={css.card}>
          <h3>📬 MailBox</h3>
          <p>Manage your messages and test CRUD operations.</p>
        </div>

        <div className={css.card}>
          <h3>🛒 Products</h3>
          <p>Practice fetching product lists and rendering UI elements.</p>
        </div>

        <div className={css.card}>
          <h3>🔎 Search</h3>
          <p>Experiment with search filters and state management.</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
