import React from 'react';

import AsideMenu from '../AsideMenu';

import './styles.css';

const Header = () => (
  <header>
    <nav>
      <AsideMenu />
      <div className="logo">
        <p>YourMovies</p>
      </div>
    </nav>
  </header>
);

export default Header;
