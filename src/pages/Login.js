import React from 'react';
import PropTypes from 'prop-types';
import Loading from '../components/Loading';
import earphonesImg from '../images/earphones.svg';

class Login extends React.Component {
  render() {
    const MIN_LENGTH = 3;
    const { userName, handleChange, handleClick, loading } = this.props;
    const loginBtnDisabled = userName.length < MIN_LENGTH;
    return (
      <main className="login" data-testid="page-login">
        <div className="logo-container">
          <h1>trybe</h1>
          <img
            className="earphone-img"
            src={ earphonesImg }
            alt="Fones de ouvido"
          />
          <h1>tunes</h1>
        </div>
        <div className="login-container">
          <h1>Login</h1>
          {loading
            ? <Loading className="login" />
            : (
              <form className="login-form">
                <label htmlFor="userName">
                  Usuário
                  <input
                    type="text"
                    data-testid="login-name-input"
                    name="userName"
                    autoComplete="off"
                    value={ userName }
                    onChange={ handleChange }
                  />
                </label>
                <button
                  type="button"
                  data-testid="login-submit-button"
                  disabled={ loginBtnDisabled }
                  onClick={ handleClick }
                >
                  Entrar
                </button>
              </form>
            )}
        </div>
      </main>
    );
  }
}

Login.propTypes = {
  userName: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Login;
