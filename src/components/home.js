import React, { Component } from 'react';
import Logo from './logo';
import SearchBar from './search-bar';
import RecentPosts from './recent-posts';

import { connect } from 'react-redux';
import * as actions from '../actions';

class Home extends Component {
  handleSearchBarSubmit(query) {
    console.log('home page search for', query);
    this.props.fetchPostsWithQuery(query);
    this.props.history.push('/results');
  }

  render() {
    return (
      <div>
        <div>
          <Logo />
          <SearchBar onSubmit={query => this.handleSearchBarSubmit(query)} />
          <RecentPosts />
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(Home);
