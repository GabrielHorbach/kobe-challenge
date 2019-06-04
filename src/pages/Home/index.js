import React from 'react';

import AsideMenu from '../../components/AsideMenu';
import MoviesList from '../../components/MoviesList';

import './styles.css';

const Home = () => (
  <div>
    <header>
      <nav>
        <div className="logo">
          <p>YourMovies</p>
        </div>
      </nav>
    </header>
    <div className="container">
      <AsideMenu />
      <MoviesList />
    </div>
  </div>
);

export default Home;
