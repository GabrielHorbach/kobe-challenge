import React, { Component, Fragment } from 'react';

import Movie from './components/Movie';
import Routes from './routes';

import api from './services/api';
import { API_KEY } from './constants';

export default class Home extends Component {
  state = {
    movies: [],
    genres: [],
    page: 1,
    totalPages: 0,
    goToTop: false,
    error: false
  }

  componentWillMount() {
    this.handleSearch(localStorage.getItem("url"));
    this.getGenres();
    this.handleScroll();
  }

  componentDidUpdate() {
    this.handleScroll();
  }

  handleScroll = () => {
    if (this.state.goToTop) {
      this.setState({ goToTop: false })
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  getGenres = async () => {
    await api.get(`/genre/movie/list?api_key=${API_KEY}`)
      .then(response => {
        this.setState({ genres: response.data.genres })
      })
      .catch(err => console.log(err));
  }

  handleSearch = async (url, resetPage = false) => {
    localStorage.setItem("url", url);

    let page = null;

    if (resetPage) {
      page = 1;
      this.setState({ goToTop: true });
    } else {
      page = this.state.page;
    }

    const newUrl = url + `&page=${page}`;
    const response = await api.get(newUrl);

    const movies = response.data.results;
    const error = movies.length === 0 ? true : false;
    const totalPages = response.data.total_pages;

    this.setState({
      movies,
      totalPages,
      page,
      error
    });
  }

  setIfNeedRedirect = (needRedirect) => {
    this.setState({ needRedirect })
  }

  resetPage = () => {
    this.setState({ page: 1 });
  }

  setPage = (action) => {
    if (action === "prev") {
      this.setState((prevState) => {
        return {
          page: prevState.page === 1 ? prevState.page : prevState.page - 1,
          goToTop: true
        }
      }, () => this.handleSearch(localStorage.getItem("url")));
    } else {
      this.setState((prevState) => {
        const page = prevState.page === this.state.totalPages ? prevState.page : prevState.page + 1
        return { page, goToTop: true }
      }, () => this.handleSearch(localStorage.getItem("url")));
    }
  }

  renderMovies = () => {
    return (
      this.state.movies.map((movie, i) => (
        <Movie
          key={i}
          movie={movie}
          genres={this.state.genres}
          setIfNeedRedirect={this.setIfNeedRedirect}
        />
      ))
    );
  }

  render() {
    return (
      <Fragment>
        <Routes
          handleSearch={this.handleSearch}
          renderMovies={this.renderMovies}
          needRedirect={this.state.needRedirect}
          setIfNeedRedirect={this.setIfNeedRedirect}
          setPage={this.setPage}
          resetPage={this.resetPage}
          page={this.state.page}
          totalPages={this.state.totalPages}
          error={this.state.error}
        />
      </Fragment>
    );
  }
}