import React, { Component } from 'react';
import { withRouter } from "react-router";

import './styles.css';

import { API_KEY } from '../../constants';

class Movie extends Component {
  state = {
    movieId: '',
    title: '',
    backdropPath: '',
    posterPath: '',
    overview: '',
    releaseDate: '',
    imageLink: '',
    genres: ''
  }

  getMovieData = (props) => {
    const { movie, genres } = props;

    return this.setState({
      movieId: movie.id,
      title: movie.title,
      backdropPath: movie.backdrop_path,
      posterPath: movie.poster_path,
      overview: movie.overview,
      releaseDate: new Date(movie.release_date).toLocaleDateString("pt-BR"),
      genres: genres.filter(genre => { return movie.genre_ids.includes(genre.id) }).map(genre => { return genre.name }).join(', '),
      imageLink: `https://image.tmdb.org/t/p/w780/${movie.backdrop_path}?api_key=${API_KEY}`
    });
  }

  componentDidMount() {
    this.getMovieData(this.props);
  }

  componentWillReceiveProps(props) {
    const { movie } = this.props;
    if (props.movie !== movie) {
      this.getMovieData(props);
    }
  }

  showDetails() {
    this.props.history.push({
      pathname: `/movie/${this.state.movieId}`,
      state: this.state
    });
  }

  render() {
    return (
      <div className='movieItem'>
        <div className="title">
          <h3 onClick={() => { this.showDetails() }}>{this.state.title}</h3>
        </div>
        <div className="movieContent">
          <div className="left">
            {
              this.state.backdropPath
                ? <img src={this.state.imageLink} alt="Movie's logo" onClick={() => { this.showDetails() }} />
                : <h1>No backdrop found</h1>
            }
          </div>
          <div className="right">
            <p><strong>Genres: </strong>{this.state.genres}</p>
            <p><strong>Release Date:</strong> {this.state.releaseDate}</p>
            <p><strong>Overview:</strong> {this.state.overview}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Movie);