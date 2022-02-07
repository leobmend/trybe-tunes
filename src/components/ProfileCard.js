import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class ProfileCard extends React.Component {
  render() {
    const { user: { name, email, image, description } } = this.props;
    return (
      <div>
        <div>
          <img src={ image } alt={ name } data-testid="profile-image" />
          <Link to="/profile/edit">Editar perfil</Link>
        </div>
        <div>
          <h3>Nome</h3>
          <p>{ name }</p>
        </div>
        <div>
          <h3>E-mail</h3>
          <p>{ email }</p>
        </div>
        <div>
          <h3>Descrição</h3>
          <p>{ description }</p>
        </div>
      </div>
    );
  }
}

ProfileCard.propTypes = {
  user: PropTypes.objectOf(PropTypes.string).isRequired,
};

export default ProfileCard;
