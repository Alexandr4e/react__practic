import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../App.css';


class Filter extends Component {
  static propTypes = {
    resetHandler: PropTypes.func.isRequired,
    sortByDateHandler: PropTypes.func.isRequired,
    sortByGoodHandler: PropTypes.func.isRequired,
  };

  render() {
    return (
      <div className="filter">
        <button
          className="filter__btn"
          type="button"
          onClick={this.props.resetHandler}
        >
          All
        </button>
        <button
          className="filter__btn"
          type="button"
          onClick={this.props.sortByDateHandler}
        >
          by date enable
        </button>
        <button
          className="filter__btn"
          type="button"
          onClick={this.props.sortByGoodHandler}
        >
          by good news
        </button>
      </div>
    );
  }
}
export default Filter;
