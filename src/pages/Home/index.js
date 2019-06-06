import React, { Component } from 'react';

import Movie from '../../components/Movie';
import MoviesList from '../../components/MoviesList';
import Header from '../../components/Header';

import api from '../../services/api';
import { URL_LIST } from '../../constants';

export default class Home extends Component {
  state = {
    movies: []
  }

  componentDidMount() {
    this.handleSearch(localStorage.getItem("url"));
  }

  handleSearch = async (url) => {
    let newUrl = url || URL_LIST;

    localStorage.setItem("url", newUrl);

    const response = await api.get(newUrl);
    const movies = response.data.results;

    this.setState({ movies });
  }

  renderMovies = () => {
    return (
      this.state.movies.map((movie, i) => (
        <Movie key={i} movie={movie} />
      ))
    );
  }

  render() {
    console.log(localStorage.getItem("url"));
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