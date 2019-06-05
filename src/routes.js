import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/movie/:id' component={MovieDetail} />
    </Switch>
  </BrowserRouter>
);

export default Routes;