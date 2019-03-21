import * as React from 'react';

import './style.css';

interface ISearchProps {
  onSearch: (searchText) => void;
}

interface ISearchState {
  searchText: string;
}

class Search extends React.Component<ISearchProps, ISearchState> {
  state = {
    searchText: '',
  };

  onSearchChange = (event) => {
    const searchText = event.target.value;
    this.setState(
      { searchText },
      () => this.props.onSearch(this.state.searchText),
    );
  }

  render() {
    return (
      <div className="searchBox">
        <p>Search:</p>
        <input
          type="text"
          onChange={this.onSearchChange}
          value={this.state.searchText}
          placeholder="Company name"
        />
      </div>
    );
  }
}

export default Search;
