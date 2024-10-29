import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Главная</Link>
          <Link to="/about">О нас</Link>
        </nav>
      </header>
      <main>{children}</main>
      <footer>
        <p>© 2024 Мой сайт</p>
      </footer>
    </div>
  );
};

export default Layout;
