import React from 'react';
import Header from '../components/Header';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      artistSearch: '',
    };

    this.handleChange = this.handleChange.bind(this);
    // this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const MIN_LENGTH = 2;
    const { artistSearch } = this.state;
    const searchBtnDisabled = artistSearch.length < MIN_LENGTH;
    return (
      <div data-testid="page-search">
        <Header />
        <form>
          <label htmlFor="artistSearch">
            <input
              type="text"
              data-testid="search-artist-input"
              name="artistSearch"
              value={ artistSearch }
              onChange={ this.handleChange }
            />
          </label>
          <button
            type="button"
            data-testid="search-artist-button"
            disabled={ searchBtnDisabled }
            // onClick={ this.handleClick }
          >
            Buscar
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
