import React from 'react';
import PropTypes from 'prop-types';

import '../App.css';

const Footer = ({
  value,
  action,
}) => (
  <footer className="App__footer">
    <div className="App__footer-title">{value}</div>
    <button
      type="button"
      className="App__footer-btn"
      onClick={
        () => action('hoho')
      }
    >
      push me
    </button>
  </footer>
);

Footer.propTypes = {
  action: PropTypes.func.isRequired,
  value: PropTypes.string,
};

Footer.defaultProps = {
  value: '',
};

export default Footer;
