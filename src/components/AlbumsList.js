import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import AlbumCard from './AlbumCard';

class AlbumsList extends React.Component {
  render() {
    const { albums, artistSearch } = this.props;
    return (
      <section className="albums-board">
        {albums.length === 0
          ? <h2>Nenhum álbum foi encontrado</h2>
          : (
            <>
              <h2>{`Resultado de álbuns de: ${artistSearch}`}</h2>
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
      </section>
    );
  }
}

AlbumsList.propTypes = {
  albums: PropTypes.arrayOf(PropTypes.object).isRequired,
  artistSearch: PropTypes.string.isRequired,
};

export default AlbumsList;
