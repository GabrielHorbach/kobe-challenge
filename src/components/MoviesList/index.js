import React, { Component } from 'react';

import Movie from '../Movie';

import api from '../../services/api';

import './styles.css';

export default class MoviesList extends Component {
  state = {
    movies: []
  }

  async componentDidMount() {
    const response = await api.get('/discover/movie?&api_key=c5850ed73901b8d268d0898a8a9d8bff');

    this.setState({
      movies: response.data.results
    });
  }

  renderMovies() {
    return (
      this.state.movies.map(movie => (
        <Movie movie={movie} />
      ))
    );
  }

  render() {
    return (
      <div className="movieList">
        {this.renderMovies()}
      </div>
    );
  }
}
