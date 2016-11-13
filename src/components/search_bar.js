/**
 * Created by muhammed on 13/11/16.
 */

import React, { Component } from 'react';

class SearchBar extends Component {
  render() {
    // [A] return <input onChange={this.onInputChange} />;
    // [B] return <input onChange={(event) => { console.log(event.target.value); }} />;
    return <input onChange={event => { console.log(event.target.value); }} />;
  }

  /** [A]
  onInputChange(event) {
    console.log(event.target.value);
  } */
}

export default SearchBar;