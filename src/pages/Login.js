import React from 'react';
import PropTypes from 'prop-types';
import Loading from '../components/Loading';

class Login extends React.Component {
  render() {
    const MIN_LENGTH = 3;
    const { userName, handleChange, handleClick, loading } = this.props;
    const loginBtnDisabled = userName.length < MIN_LENGTH;
    return (
      <div data-testid="page-login">
        <h1>Login</h1>
        {loading
          ? <Loading />
          : (
            <form>
              <label htmlFor="userName">
                Usuário:
                <input
                  type="text"
                  data-testid="login-name-input"
                  name="userName"
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
