import React from 'react';
import PropTypes from 'prop-types';

class Loading extends React.Component {
  render() {
    const { className } = this.props;
    return (
      <div className={ `${className}-loading` }>
        Carregando...
      </div>
    );
  }
}

Loading.propTypes = {
  className: PropTypes.string.isRequired,
};

export default Loading;
