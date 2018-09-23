import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../App.css';


class NewsItem extends Component {
  static propTypes = {
    data: PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      preview: PropTypes.string,
      description: PropTypes.string,
      date: PropTypes.string,
    }).isRequired,
    deleteHandler: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  show = () => {
    this.setState({
      visible: true,
    });
  };

  render() {
    const { deleteHandler, data } = this.props;
    const {
      id,
      title,
      preview,
      description,
      date,
    } = data;
    const { visible } = this.state;
    return (
      <div className="news-item">
        <p className="news-item__title">{title}</p>

        { !visible &&
        <React.Fragment>
          <span className="news-item__preview">
            {preview}
            ...
          </span>
          <button
            type="button"
            className="news-item__btn"
            onClick={this.show}
          >
            lean more
          </button>
        </React.Fragment>
        }

        { visible &&
        <p className="news-item__description">{description}</p>
        }
        <p className="news-item__date">{date}</p>
        <button
          type="button"
          className="news-item__close"
          onClick={() => {
            deleteHandler(id);
          }}
          // onClick={deleteHandler}
        >
          Delete
        </button>
      </div>
    );
  }
}

export default NewsItem;
