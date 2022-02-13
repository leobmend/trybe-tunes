import React from 'react';
import PropTypes, { oneOfType } from 'prop-types';

class AlbumCard extends React.Component {
  render() {
    const { album: { artistName, collectionName, artworkUrl100 } } = this.props;
    return (
      <div className="album-card">
        <img src={ artworkUrl100 } alt={ `${collectionName} artwork` } />
        <h3 data-testid="album-name">{collectionName}</h3>
        <p data-testid="artist-name">{artistName}</p>
      </div>
    );
  }
}

AlbumCard.propTypes = {
  album: PropTypes.objectOf(oneOfType([
    PropTypes.number,
    PropTypes.string])).isRequired,
};

export default AlbumCard;
