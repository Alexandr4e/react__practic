import React, { Component } from 'react';

class Article extends Component {
  state = {
    visible: false,
  };

  handleReadMoreClck = (e) => {
    e.preventDefault();
    this.setState({ visible: true });
  };

  render() {
    const { author, text, bigText } = this.props.data;
    const { visible } = this.state;
    console.log('render', this); // добавили console.log
    return (
      <div className="article">
        <p className="news__author">{author}:</p>
        <p className="news__text">{text}</p>
        {
          !visible && <a onClick={this.handleReadMoreClck} href="#" className='news__readmore'>Подробнее</a>
        }
        {
          visible && <p className='news__big-text'>{bigText}</p>
        }
      </div>
    );
  }
}

export default Article;
