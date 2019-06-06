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
    releaseDate: '',
    imageLink: ''
  }

  getMovieData = async (movieId) => {
    await api.get(`/movie/${movieId}?api_key=${API_KEY}`)
      .then(response => {
        const data = response.data;

        this.setState({
          movieId: data.id,
          title: data.title,
          backdropPath: data.backdrop_path,
          posterPath: data.poster_path,
          overview: data.overview,
          releaseDate: new Date(data.release_date).toLocaleDateString("pt-BR"),
          genres: data.genres.map(genre => { return genre.name }).join(', '),
          imageLink: `https://image.tmdb.org/t/p/w780/${data.backdrop_path}?api_key=${API_KEY}`
        });
      }).catch(error => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.getMovieData(this.props.movie.id);
  }

  componentWillReceiveProps(props) {
    const { movie } = this.props;
    if (props.movie !== movie) {
      this.getMovieData(props.movie.id);
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