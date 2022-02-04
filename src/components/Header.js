import React from 'react';
import { Link } from 'react-router-dom';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

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
        <h1>TrybeTunes</h1>
        <Link to="/search" data-testid="link-to-search">Pesquisa</Link>
        <Link to="/favorites" data-testid="link-to-favorites">Favoritos</Link>
        <Link to="/profile" data-testid="link-to-profile">Perfil</Link>
        {loading
          ? <Loading />
          : (
            <h2 data-testid="header-user-name">
              {userName}
            </h2>
          )}
      </header>
    );
  }
}

export default Header;
