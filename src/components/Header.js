import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';
import earphoneImg from '../images/earphone.svg';

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      loading: true,
    };
  }

  componentDidMount() {
    getUser().then((user) => {
      const { name } = user;
      this.setState({
        userName: name,
        loading: false,
      });
    });
  }

  render() {
    const { userName, loading } = this.state;
    return (
      <header data-testid="header-component">
        <div className="title-container">
          <h1>trybe</h1>
          <img
            className="earphone-img"
            src={ earphoneImg }
            alt="Fones de ouvido"
          />
          <h1>tunes</h1>
        </div>
        <div className="user-container">
          {loading
            ? <Loading />
            : (
              <h2 data-testid="header-user-name">
                {userName}
              </h2>
            )}
        </div>
        <div className="links-container">
          <Link to="/search" data-testid="link-to-search">Pesquisa</Link>
          <Link to="/favorites" data-testid="link-to-favorites">Favoritos</Link>
          <Link to="/profile" data-testid="link-to-profile">Perfil</Link>
        </div>
      </header>
    );
  }
}

export default Header;
