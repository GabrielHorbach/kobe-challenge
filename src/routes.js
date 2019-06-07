import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Header from './components/Header';
import MovieDetail from './pages/MovieDetail';

const Routes = (props) => {
  return (
    <BrowserRouter>
      <Header
        handleSearch={props.handleSearch}
        needRedirect={props.needRedirect}
        setIfNeedRedirect={props.setIfNeedRedirect}
        resetPage={props.resetPage}
      />
      <Switch>
        <Route
          path='/'
          exact
          render={() =>
            <Home
              {...props}
              renderMovies={props.renderMovies}
              setPage={props.setPage}
              page={props.page}
              totalPages={props.totalPages}
              error={props.error}
            />
          }
        />
        <Route path='/movie/:id' component={MovieDetail} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;