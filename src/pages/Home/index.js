import React, { Fragment } from 'react';

import MoviesList from '../../components/MoviesList';
import PageController from '../../components/PageController';
import ErrorComponent from '../../components/ErrorComponent';

const Home = (props) => {
  return (
    <div className="container">
      {props.error
        ? <ErrorComponent />
        : <Fragment>
          <PageController
            setPage={props.setPage}
            page={props.page}
            totalPages={props.totalPages}
          />
          <MoviesList>
            {props.renderMovies()}
          </MoviesList>
          <PageController
            setPage={props.setPage}
            page={props.page}
            totalPages={props.totalPages}
          />
        </Fragment>
      }

    </div>
  );
}

export default Home;