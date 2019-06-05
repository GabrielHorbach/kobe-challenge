import React from 'react';

import './styles.css';

const Detail = (props) => {
  const { renderPoster, movie } = props;

  return (
    <div className="detailMovie">
      <div className="posterWrapper">
        {renderPoster()}
      </div>
      <div className="movieInfo">
        <div className="title">
          <h1>{movie.title}</h1>
        </div>
        <div className="info">
          <p><strong>Genres: </strong>{movie.genres}</p>
          <p><strong>Release Date:</strong> {movie.releaseDate}</p>
          <p><strong>Overview:</strong> {movie.overview}</p>
        </div>
      </div>
    </div>
  );
}

export default Detail;
