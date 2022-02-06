import React from 'react';
import PropTypes, { oneOfType } from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import AlbumCard from '../components/AlbumCard';
import MusicCard from '../components/MusicCard';
import Loading from '../components/Loading';

class Album extends React.Component {
  constructor() {
    super();
    this.state = {
      albumInfo: {},
      musics: [],
      loading: true,
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    getMusics(id).then((results) => {
      this.setState({
        albumInfo: results[0],
        musics: results.slice(1),
        loading: false,
      });
    });
  }

  render() {
    const { albumInfo, musics, loading } = this.state;
    return (
      <div data-testid="page-album">
        <Header />
        {loading
          ? <Loading />
          : (
            <main>
              <AlbumCard album={ albumInfo } />
              <div>
                {musics.map(({ trackId, trackName, previewUrl }) => (
                  <MusicCard
                    key={ trackId }
                    music={ { trackName, previewUrl } }
                  />
                ))}
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
