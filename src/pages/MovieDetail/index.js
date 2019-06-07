import React, { Fragment } from 'react';

import Detail from '../../components/Detail';

import { API_KEY } from '../../constants';

const MovieDetail = (props) => {
  const movie = props.location.state;

  const renderPoster = () => {
    const link = `https://image.tmdb.org/t/p/w500/${movie.posterPath}?api_key=${API_KEY}`;

    return <img src={link} alt="Movie's poster" />
  }

  return (
    <Fragment>
      <div className="container">
        <Detail renderPoster={renderPoster} movie={movie} />
      </div>
    </Fragment>
  )
}

export default MovieDetail;
