import React, { Component } from 'react';
import { withRouter } from "react-router";

import './styles.css';

import { API_KEY } from '../../constants';
import api from '../../services/api';

class Movie extends Component {
  state = {
    movieId: '',
    title: '',
    backdropPath: '',
    posterPath: '',
    overview: '',
    releaseDate: ''
  }

  async componentDidMount() {
    const response = await api.get(`/movie/${this.props.movie.id}?api_key=${API_KEY}`);
    const data = response.data;

    this.setState({
      movieId: data.id,
      title: data.title,
      backdropPath: data.backdrop_path,
      posterPath: data.poster_path,
      overview: data.overview,
      releaseDate: new Date(data.release_date).toLocaleDateString("pt-BR"),
      genres: data.genres.map(genre => { return genre.name }).join(', ')
    });
  }

  showDetails() {
    this.props.history.push({
      pathname: `/movie/${this.state.movieId}`,
      state: this.state
    });
  }

  render() {
    const link = `https://image.tmdb.org/t/p/w500/${this.state.backdropPath}?api_key=${API_KEY}`;

    return (
      <div className='movieItem'>
        <div className="title">
          <h3 onClick={() => { this.showDetails() }}>{this.state.title}</h3>
        </div>
        <div className="movieContent">
          <div className="left">
            <img src={link} alt="Movie's logo" onClick={() => { this.showDetails() }} />
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