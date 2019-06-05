import React from 'react';

import MoviesList from '../../components/MoviesList';
import Header from '../../components/Header';

const Home = () => (
  <div>
    <Header />
    <div className="container">
      <MoviesList />
    </div>
  </div>
);

export default Home;
