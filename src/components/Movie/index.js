import React, { Component } from 'react';

import './styles.css';

import api from '../../services/api';

export default class Movie extends Component {
  async componentDidMount() {
    const response = await api.get(`/movie/${this.props.movie.id}?api_key=c5850ed73901b8d268d0898a8a9d8bff`);
    console.log(response);
  }

  render() {
    const { movie } = this.props;

    return (
      <div key={movie.id} class='movieItem'>
        <h3>{movie.title}</h3>
        <p>{movie.genre_ids}</p>
        <p>{movie.release_date}</p>
        <p>{movie.overview}</p>
      </div>
    );
  }
}