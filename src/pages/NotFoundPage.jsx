import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import css from './NotFoundPage.module.css';

const NotFoundPage = () => {
  const [timer, setTimer] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (timer === 5) {
      navigate('/', { replace: true });
      return;
    }

    const intervalId = setInterval(() => {
      setTimer(prev => prev + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timer, navigate]);

  return (
    <div className={css.container}>
      <h1 className={css.code}>404</h1>
      <h2 className={css.title}>Page Not Found</h2>
      <p className={css.subtitle}>
        Oops! The page you are looking for does not exist or has been moved.</p>
      <h2>You will be redirected to home in {Math.max(5 - timer, 0)} seconds</h2>
      <button className={css.button} onClick={() => navigate('/')}>Go Back Home</button>
    </div>
  );
};

export default NotFoundPage;
