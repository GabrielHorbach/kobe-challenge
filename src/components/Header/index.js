import React, { Component } from 'react';

import './styles.css';
import { URL_SEARCH, URL_LIST } from '../../constants';

export default class Header extends Component {
  state = {
    search: ''
  }

  handleChange = (event) => {
    this.setState({ search: event.target.value });
  }

  handleClick = (event) => {
    event.preventDefault();

    let newUrl = '';

    if (this.state.search !== '') {
      newUrl = encodeURI(URL_SEARCH) + this.state.search;
    } else {
      newUrl = URL_LIST;
    }
    this.props.handleSearch(newUrl);
  }

  render() {
    return (
      <header>
        <nav>
          <div className="asideMenu">
            <input type="text" placeholder="Type a movie name" onChange={this.handleChange} value={this.state.search} />
            <button onClick={this.handleClick}>Search</button>
          </div>
          <div className="logo">
            <p>KobeMovies</p>
          </div>
        </nav>
      </header>
    );
  }
}