import React from 'react';
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
