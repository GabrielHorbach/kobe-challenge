import React, { Component } from 'react';

import './styles.css';

export default class MoviesList extends Component {
  render() {
    return (
      <div className="movieList">
        <div className="wrapper"></div>
        {this.props.children}
      </div>
    );
  }
}