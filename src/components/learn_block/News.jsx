import React, { Component } from 'react';

import Article from './Article';

class News extends Component {
  state = {
    counter: 0,
  };

  handleCounter = () => {
    this.setState({ counter: ++this.state.counter })
  };

  renderNews = () => {
    const { data } = this.props;
    let newsTemplate = null;

    if (data.length) {
      newsTemplate = data.map(function(item) {
        return <Article key={item.id} data={item} />
      })
    } else {
      newsTemplate = <p>К сожалению новостей нет</p>;
    }

    return newsTemplate
  };
  render() {
    const { data } = this.props;
    const { counter } = this.state;

    return (
      <div className='news'>
        {this.renderNews()}
        {
          data.length ? <strong onClick={this.handleCounter} className={'news__count'}>Всего новостей: {data.length}</strong> : null
        }
        <p>
          Всего кликов:
          { counter }
        </p>
      </div>
    );
  }
}
export default News;
