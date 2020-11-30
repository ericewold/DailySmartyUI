import React, { Component } from 'react';
import Logo from './logo';
import SearchBar from './search-bar';
import ResultsPosts from './results-posts';

import { connect } from 'react-redux';
import * as actions from '../actions';

class Results extends Component {
  handleSearchBarSubmit(query) {
    console.log('search page search for', query);
    this.props.fetchPostsWithQuery(query);
  }

  render() {
    return (
      <div className='app-container'>
        <Logo size={55} />
        <SearchBar onSubmit={query => this.handleSearchBarSubmit(query)} />
        <ResultsPosts />
      </div>
    );
  }
}
export default connect(null, actions)(Results);
