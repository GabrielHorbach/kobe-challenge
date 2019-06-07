import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

import { withRouter } from 'react-router-dom';

import './styles.css';
import { URL_SEARCH, URL_LIST } from '../../constants';

class Header extends Component {
  state = {
    search: ''
  }

  handleChange = (event) => {
    this.setState({ search: event.target.value });
  }

  handleClick = async (e) => {
    e.preventDefault();

    let newUrl = '';

    if (this.state.search !== '') {
      newUrl = encodeURI(URL_SEARCH) + this.state.search;
    } else {
      newUrl = URL_LIST;
    }

    await this.props.handleSearch(newUrl, true)
      .then(() => {
        if (this.props.needRedirect) {
          this.props.setIfNeedRedirect(false);
          this.props.history.push('/');
        }
      });
  }

  render() {
    return (
      <header>
        <nav>
          <div className="asideMenu">
            <input type="text" placeholder="Type a movie name" onChange={this.handleChange} value={this.state.search} />
            <button onClick={this.handleClick}><FontAwesome name="search"/></button>
          </div>
          <div className="logo">
            <p>KobeMovies</p>
          </div>
        </nav>
      </header>
    );
  }
}

export default withRouter(Header);