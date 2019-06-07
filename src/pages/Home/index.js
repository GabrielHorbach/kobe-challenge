import React, { Component } from 'react';

import Movie from '../../components/Movie';
import MoviesList from '../../components/MoviesList';
import Header from '../../components/Header';

import api from '../../services/api';
import { API_KEY } from '../../constants';

export default class Home extends Component {
  state = {
    movies: [],
    genres: []
  }

  componentDidMount() {
    this.handleSearch(localStorage.getItem("url"));
    this.getGenres();
  }

  getGenres = async () => {
    await api.get(`/genre/movie/list?api_key=${API_KEY}`)
      .then(response => {
        this.setState({ genres: response.data.genres })
      })
      .catch(err => console.log(err));
  }

  handleSearch = async (newUrl) => {
    localStorage.setItem("url", newUrl);

    const response = await api.get(newUrl);
    const movies = response.data.results;

    this.setState({ movies });
  }

  renderMovies = () => {
    return (
      this.state.movies.map((movie, i) => (
        <Movie
          key={i}
          movie={movie}
          genres={this.state.genres}
        />
      ))
    );
  }

  render() {
    return (
      <div>
        <Header handleSearch={this.handleSearch} />
        <div className="container">
          <MoviesList>
            {this.renderMovies()}
          </MoviesList>
        </div>
      </div>
    );
  }
}