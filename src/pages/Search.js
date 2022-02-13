import React from 'react';
import AlbumsList from '../components/AlbumsList';
import Header from '../components/Header';
import Loading from '../components/Loading';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      searchInput: '',
      artistSearch: '',
      albumsList: [],
      loading: false,
      showResults: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { searchInput } = this.state;
    searchAlbumsAPI(searchInput);
    this.setState(() => ({
      searchInput: '',
      artistSearch: searchInput,
      loading: true,
    }), () => searchAlbumsAPI(searchInput)
      .then((response) => this.setState({
        albumsList: response,
        loading: false,
        showResults: true,
      })));
  }

  render() {
    const MIN_LENGTH = 2;
    const { searchInput, artistSearch,
      albumsList, loading, showResults } = this.state;
    const searchBtnDisabled = searchInput.length < MIN_LENGTH;
    return (
      <main className="search" data-testid="page-search">
        <Header />
        <form className="search-form">
          <label htmlFor="searchInput">
            <input
              type="text"
              data-testid="search-artist-input"
              placeholder="Pesquise seu artista"
              name="searchInput"
              value={ searchInput }
              onChange={ this.handleChange }
            />
          </label>
          <button
            className="search-button"
            type="button"
            data-testid="search-artist-button"
            disabled={ searchBtnDisabled }
            onClick={ this.handleClick }
          >
            Buscar
          </button>
        </form>
        {loading
          && <Loading />}
        {showResults
          && <AlbumsList albums={ albumsList } artistSearch={ artistSearch } />}
      </main>
    );
  }
}

export default Search;
