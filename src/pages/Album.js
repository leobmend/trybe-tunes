import React from 'react';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';

class Album extends React.Component {
  constructor() {
    super();
    this.state = {
      albumInfo: '',
      musics: [],
    };
  }

  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    console.log(typeof id)
    getMusics(id).then((results) => {
      this.setState({
        albumInfo: results[0],
        musics: results.slice(1),
      });
    });
  }

  render() {
    return (
      <div data-testid="page-album">
        <Header />
        Album
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.objectOf.isRequired,
};

export default Album;
