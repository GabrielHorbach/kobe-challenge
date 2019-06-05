import React, { Component } from 'react';

import Movie from '../Movie';

import api from '../../services/api';
import { API_KEY } from '../../constants';

import './styles.css';

export default class MoviesList extends Component {
  state = {
    movies: []
  }

  shouldComponentUpdate(netxProps, nextState) {
    return !(this.state.movies === nextState.movies)
  }

  async componentDidMount() {
    const response = await api.get(`/discover/movie?&api_key=${API_KEY}`);

    this.setState({
      movies: response.data.results
    });
  }

  renderMovies() {
    return (
      this.state.movies.map((movie, i) => (
        <Movie key={i} movie={movie} />
      ))
    );
  }

  render() {
    return (
      <div className="movieList">
        <div className="wrapper"></div>
        {this.renderMovies()}
      </div>
    );
  }
}
