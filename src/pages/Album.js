import React from 'react';
import PropTypes, { oneOfType } from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import AlbumCard from '../components/AlbumCard';
import MusicCard from '../components/MusicCard';
import Loading from '../components/Loading';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';

class Album extends React.Component {
  constructor() {
    super();
    this.state = {
      albumInfo: {},
      musics: [],
      loading: true,
      favoriteSongs: [],
    };

    this.updateFavorites = this.updateFavorites.bind(this);
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    getMusics(id).then((musicsResults) => {
      getFavoriteSongs().then((favoriteResults) => {
        this.setState({
          albumInfo: musicsResults[0],
          musics: musicsResults.slice(1),
          favoriteSongs: favoriteResults,
          loading: false,
        });
      });
    });
  }

  // Callback é fornecida pelo Component MusicCard, a depender se
  // o imput foi marcado ou desmarcado.
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
    const { albumInfo, musics, favoriteSongs, loading } = this.state;
    return (
      <div data-testid="page-album">
        <Header />
        {loading
          ? <Loading />
          : (
            <main>
              <AlbumCard album={ albumInfo } />
              <div>
                {musics.map((music) => {
                  const isFavorite = favoriteSongs.some(({ trackId }) => (
                    trackId === music.trackId));
                  return (
                    <MusicCard
                      key={ music.trackId }
                      music={ music }
                      updateFavorites={ this.updateFavorites }
                      isFavorite={ isFavorite }
                    />);
                })}
              </div>
            </main>)}
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.objectOf(oneOfType([
    PropTypes.object,
    PropTypes.bool,
    PropTypes.string,
  ])).isRequired,
};

export default Album;
