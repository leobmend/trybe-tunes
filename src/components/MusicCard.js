import React from 'react';
import PropTypes, { oneOfType } from 'prop-types';
import { addSong, removeSong } from '../services/favoriteSongsAPI';

class MusicCard extends React.Component {
  constructor() {
    super();
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { checked } = event.target;
    const { music, updateFavorites } = this.props;
    if (checked) {
      updateFavorites(music, addSong);
    } else {
      updateFavorites(music, removeSong);
    }
  }

  render() {
    const { music: { trackName, previewUrl, trackId }, isFavorite } = this.props;
    return (
      <div>
        <p>{trackName}</p>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          <code>audio</code>
          .
        </audio>
        <label htmlFor={ trackId }>
          Favorita
          <input
            type="checkbox"
            checked={ isFavorite }
            data-testid={ `checkbox-music-${trackId}` }
            onChange={ this.handleChange }
          />
        </label>
      </div>
    );
  }
}

MusicCard.propTypes = {
  music: PropTypes.objectOf(oneOfType([
    PropTypes.string,
    PropTypes.number,
    PropTypes.bool,
  ])).isRequired,
  updateFavorites: PropTypes.func.isRequired,
  isFavorite: PropTypes.bool.isRequired,
};

export default MusicCard;
