import React from 'react';
import { useNavigate } from 'react-router-dom';
import css from './NotFoundPage.module.css';

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <div className={css.container}>
      <h1 className={css.code}>404</h1>
      <h2 className={css.title}>Page Not Found</h2>
      <p className={css.subtitle}>
        Oops! The page you are looking for does not exist or has been moved.
      </p>
      <button className={css.button} onClick={() => navigate('/')}>
        Go Back Home
      </button>
    </div>
  );
};

export default NotFoundPage;
