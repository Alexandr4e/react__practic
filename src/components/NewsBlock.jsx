import React, { Component } from 'react';

import NewsItem from './NewsItem';
import Filter from './Filter';

import '../App.css';

class NewsBlock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsList: [
        {
          id: 1,
          title: 'Все плохо',
          preview: 'Все очень плохо',
          description: 'Все очень плохо но будет лучше',
          date: '1.1.2012',
          good: false,
        },
        {
          id: 2,
          title: 'Все норм',
          preview: 'Все очень норм',
          description: 'Все очень норм но будет лучше',
          date: '',
          good: true,
        },
        {
          id: 3,
          title: 'Все хорошо',
          preview: 'Все очень хорошо',
          description: 'Все очень хорошо но будет лучше',
          date: '1.1.2012',
          good: true,
        },
        {
          id: 4,
          title: 'Все опять плохо',
          preview: 'Все опять очень плохо',
          description: 'Все опять очень плохо но будет лучше',
          date: '1.1.2012',
          good: false,
        },
        {
          id: 5,
          title: 'Все опять плохо',
          preview: 'Все опять очень плохо',
          description: 'Все опять очень плохо но будет лучше',
          date: '',
          good: false,
        },
        {
          id: 6,
          title: 'Все опять плохо',
          preview: 'Все опять очень плохо',
          description: 'Все опять очень плохо но будет лучше',
          date: '1.1.2012',
          good: false,
        },
      ],
      filterByGood: false,
      dateTime: false,
    };
  }

  addNews = () => {
    const { newsList } = this.state;

    newsList.push({
      id: +newsList[newsList.length - 1].id + 1,
      title: 'Какая то новая новость',
      preview: 'Все не совсем понятно',
      description: 'Все не совсем понятно но будет хз как',
      date: '1.1.2019',
      good: true,
    });
    this.setState({
      newsList,
    });
    // console.log(newsList.length);
  };

  delItem = (id) => {
    this.setState({
      newsList: this.state.newsList.filter(item => item.id !== id),
    });
    // console.log(this.state.newsList.length);
  };

  resetHandler = () => {
    this.setState({
      filterByGood: false,
      dateTime: false,
    });
    // console.log('reset');
  };

  sortByDateHandler = () => {
    this.setState({
      dateTime: true,
    });
    // console.log('filter-data');
  };

  sortByGoodHandled = () => {
    this.setState({
      filterByGood: true,
      dateTime: false,
    });
    // console.log('filter-good');
  };

  render() {
    const {
      newsList,
      dateTime,
      filterByGood,
    } = this.state;

    return (
      <div className="news-block">
        <div className="news-block-title">
          <h2
            className="news-block__title-text"
          >
            NEWS
          </h2>
          <Filter
            data={newsList}
            resetHandler={this.resetHandler}
            sortByDateHandler={this.sortByDateHandler}
            sortByGoodHandler={this.sortByGoodHandled}
          />
        </div>
        <div className="news-block__main">
          {filterByGood && newsList
            .filter(item => item.good)
            .map(item => (
              <NewsItem
                data={item}
                key={item.id}
                deleteHandler={this.delItem}
              />
            ))
          }
          {dateTime && newsList
            .filter(item => item.date !== '')
            .map(item => (
              <NewsItem
                data={item}
                key={item.id}
                deleteHandler={this.delItem}
              />
            ))
          }
          {!filterByGood && !dateTime && newsList.map(item => (
            <NewsItem
              data={item}
              key={item.id}
              deleteHandler={this.delItem}
            />
          ))}

        </div>
        <div className="news-block__main-bottom">
          <button
            className="news-block__btn"
            type="button"
            onClick={this.addNews}
          >
            Add
          </button>
          <p className="news-block__summNews">
            Всего новостей :
            { ' ' + newsList.length}
          </p>
        </div>
      </div>
    );
  }
}

export default NewsBlock;
