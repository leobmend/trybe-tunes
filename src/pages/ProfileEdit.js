import React from 'react';
import PropTypes, { oneOfType } from 'prop-types';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { getUser, updateUser } from '../services/userAPI';

class ProfileEdit extends React.Component {
  constructor() {
    super();
    this.state = {
      name: '',
      email: '',
      image: '',
      description: '',
      loading: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    getUser().then((user) => {
      this.setState({
        ...user,
        loading: false,
      });
    });
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  handleClick() {
    const { name, email, image, description } = this.state;
    const { history } = this.props;
    this.setState({ loading: true }, () => {
      updateUser({ name, email, image, description }).then(() => {
        history.push('/profile');
      });
    });
  }

  render() {
    const { name, email, image, description, loading } = this.state;
    const saveBtnDisabled = !(name.length && email.length
      && image.length && email.match(/^[\w.-]+[@][\w.]+[.][\w.]+$/));
    return (
      <div data-testid="page-profile-edit">
        <Header />
        {loading
          ? <Loading />
          : (
            <form>
              <div>
                <img src={ image } alt={ name } />
                <label htmlFor="image">
                  <input
                    type="text"
                    data-testid="edit-input-image"
                    name="image"
                    value={ image }
                    onChange={ this.handleChange }
                  />
                </label>
              </div>
              <label htmlFor="name">
                <h3>Nome</h3>
                <p>Fique a vontade para utilizar seu nome social</p>
                <input
                  type="text"
                  data-testid="edit-input-name"
                  name="name"
                  value={ name }
                  onChange={ this.handleChange }
                />
              </label>
              <label htmlFor="text">
                <h3>E-mail</h3>
                <p>Escolha um e-mail que consulte diariamente.</p>
                <input
                  type="email"
                  data-testid="edit-input-email"
                  name="email"
                  value={ email }
                  onChange={ this.handleChange }
                />
              </label>
              <label htmlFor="description">
                <h3>Descrição</h3>
                <input
                  type="text"
                  data-testid="edit-input-description"
                  name="description"
                  value={ description }
                  onChange={ this.handleChange }
                />
              </label>
              <button
                type="button"
                data-testid="edit-button-save"
                disabled={ saveBtnDisabled }
                onClick={ this.handleClick }
              >
                Salvar
              </button>
            </form>
          )}
      </div>
    );
  }
}

ProfileEdit.propTypes = {
  history: PropTypes.objectOf(oneOfType([
    PropTypes.object,
    PropTypes.string,
  ])).isRequired,
};

export default ProfileEdit;
