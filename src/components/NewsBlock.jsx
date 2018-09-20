import React, { Component } from 'react';
import '../App.css';
import NewsItem from './NewsItem';
import Filter from './Filter';

class NewsBlock extends Component {
  constructor() {
    super();
    this.state = {
      newsList: [
        {
          id: '1',
          title: 'Все плохо',
          preview: 'Все очень плохо',
          description: 'Все очень плохо но будет лучше',
          date: '1.1.2012',
          good: false,
        },
        {
          id: '2',
          title: 'Все норм',
          preview: 'Все очень норм',
          description: 'Все очень норм но будет лучше',
          date: '',
          good: true,
        },
        {
          id: '3',
          title: 'Все хорошо',
          preview: 'Все очень хорошо',
          description: 'Все очень хорошо но будет лучше',
          date: '1.1.2012',
          good: true,
        },
        {
          id: '4',
          title: 'Все опять плохо',
          preview: 'Все опять очень плохо',
          description: 'Все опять очень плохо но будет лучше',
          date: '1.1.2012',
          good: false,
        },
        {
          id: '5',
          title: 'Все опять плохо',
          preview: 'Все опять очень плохо',
          description: 'Все опять очень плохо но будет лучше',
          date: '',
          good: false,
        },
        {
          id: '6',
          title: 'Все опять плохо',
          preview: 'Все опять очень плохо',
          description: 'Все опять очень плохо но будет лучше',
          date: '1.1.2012',
          good: false,
        },
      ],
      filterByGood: false,
    };
  }

  delItem = (id) => {
    this.setState({
      newsList: this.state.newsList.filter(item => item.id !== id),
    });
  };

  filterReset = () => {
    this.setState({
      filterByGood: false,
    });
    console.log('reset');
  };

  filterSortByDate = () => {
    this.setState({
      newsList: this.state.newsList.filter(item => item.date !== ''),
    });
    console.log('filter-data');
  };

  filterSortByGood = () => {
    this.setstate({
      filterByGood: true,
    });
    console.log('filter-good');
  };

  addNews = () => {
    let NewsObject = this.state.newsList;
    NewsObject.push({
      id: +this.state.newsList[this.state.newsList.length - 1].id + 1,
      title: 'Какая то новая новость',
      preview: 'Все не совсем понятно',
      description: 'Все не совсем понятно но будет хз как',
      date: '1.1.2019',
      good: false,
    });
    this.setState({
      newsList: NewsObject,
    });
  };

  render() {
    let news =
    {
      this.state.filterByGood === true &&
       this.state.newsList
        .filter(item => item.good === true)
        .map(item => (
          <NewsItem
            data={item}
            key={item.id}
            deleteHandler={this.delItem}
          />
      ));
    }
    {
      this.state.filterByGood !== true &&
      this.state.newsList
        .map(item => (
          <NewsItem
            data={item}
            key={item.id}
            deleteHandler={this.delItem}
          />
      ));
    }

    return (
      <div className="news-block">
        <div className="news-block-title">
          <h2 className="news-block__title-text">NEWS</h2>
          <Filter
            data={this.state.newsList}
            resetHandler={this.filterReset}
            sortByDateHandler={this.filterSortByDate}
            sortByGoodHandler={this.filterSortByGood}
          />
        </div>
        <div className="news-block__main">
          {news}
        </div>
        <button
          className="news-block__title-btn"
          type="button"
          onClick={this.addNews}
        >
          Add
        </button>
      </div>
    );
  }
}

export default NewsBlock;