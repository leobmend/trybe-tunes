import React from 'react';
import PropTypes, { oneOfType } from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';
import AlbumCard from '../components/AlbumCard';
import MusicCard from '../components/MusicCard';

class Album extends React.Component {
  constructor() {
    super();
    this.state = {
      albumInfo: {},
      musics: [],
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    getMusics(id).then((results) => {
      this.setState({
        albumInfo: results[0],
        musics: results.slice(1),
      });
    });
  }

  render() {
    const { albumInfo, musics } = this.state;
    return (
      <div data-testid="page-album">
        <Header />
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
        </main>

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
