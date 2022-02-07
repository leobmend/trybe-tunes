import React from 'react';
import Header from '../components/Header';
import Loading from '../components/Loading';
import MusicCard from '../components/MusicCard';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';

class Favorites extends React.Component {
  constructor() {
    super();
    this.state = {
      favoriteSongs: [],
      loading: true,
    };

    this.updateFavorites = this.updateFavorites.bind(this);
  }

  componentDidMount() {
    getFavoriteSongs().then((favoriteResults) => {
      this.setState({
        favoriteSongs: favoriteResults,
        loading: false,
      });
    });
  }

  updateFavorites(music, callback) {
    this.setState({
      loading: true,
    }, () => {
      callback(music).then(async () => {
        const newFavoriteSongs = await getFavoriteSongs();
        this.setState({
          favoriteSongs: newFavoriteSongs,
          loading: false,
        });
      });
    });
  }

  render() {
    const { favoriteSongs, loading } = this.state;
    return (
      <div data-testid="page-favorites">
        <Header />
        {loading
          ? <Loading />
          : (
            <main>
              {favoriteSongs.map((music) => (
                <MusicCard
                  key={ music.trackId }
                  music={ music }
                  updateFavorites={ this.updateFavorites }
                  isFavorite
                />))}
            </main>)}
      </div>
    );
  }
}

export default Favorites;
