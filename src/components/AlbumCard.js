import React from 'react';
import PropTypes, { oneOfType } from 'prop-types';

class AlbumCard extends React.Component {
  render() {
    const { album: { artistName, collectionName, artworkUrl100 } } = this.props;
    return (
      <div>
        <img src={ artworkUrl100 } alt={ `${collectionName} artwork` } />
        <h3>{`Álbum ${collectionName}`}</h3>
        <p>{`Artista ${artistName}`}</p>
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
