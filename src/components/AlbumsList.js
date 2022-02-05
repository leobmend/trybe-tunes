import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AlbumCard from './AlbumCard';

class AlbumsList extends React.Component {
  render() {
    const { albums, artistSearch } = this.props;
    return (
      <div>
        {albums.length === 0
          ? <p>Nenhum álbum foi encontrado</p>
          : (
            <>
              <p>{`Resultado de álbuns de: ${artistSearch}`}</p>
              {albums.map((album) => (
                <div key={ album.collectionId }>
                  <Link
                    to={ `/album/${album.collectionId}` }
                    data-testid={ `link-to-album-${album.collectionId}` }
                  >
                    <AlbumCard album={ album } />
                  </Link>
                </div>
              ))}
            </>)}
      </div>
    );
  }
}

AlbumsList.propTypes = {
  albums: PropTypes.arrayOf(PropTypes.object).isRequired,
  artistSearch: PropTypes.string.isRequired,
};

export default AlbumsList;
