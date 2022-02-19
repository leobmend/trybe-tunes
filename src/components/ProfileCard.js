import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import defaultProfilePic from '../images/default-profile.svg';

class ProfileCard extends React.Component {
  render() {
    const { user: { name, email, image, description } } = this.props;
    const profilePicture = image.length ? image : defaultProfilePic;

    return (
      <main className="profile">
        <div className="img-container">
          <img
            className="profile-img"
            src={ profilePicture }
            alt={ name }
            data-testid="profile-image"
          />
          <Link to="/profile/edit">Editar perfil</Link>
        </div>
        <div className="profile-item-container">
          <h3>Nome</h3>
          <p>{ name }</p>
        </div>
        <div className="profile-item-container">
          <h3>E-mail</h3>
          <p>{ email }</p>
        </div>
        <div className="profile-item-container">
          <h3>Descrição</h3>
          <p>{ description }</p>
        </div>
      </main>
    );
  }
}

ProfileCard.propTypes = {
  user: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default ProfileCard;
