import React, { Component } from 'react';
import PropTypes from 'prop-types';

import '../App.css';


class Filter extends Component {
  static propTypes = {
    resetHandler: PropTypes.func.isRequired,
    sortByDateHandler: PropTypes.func.isRequired,
    sortByGoodHandler: PropTypes.func.isRequired,
  };

  // constructor(props) {
  //   super(props);
  //   // this.state = {
  //   //   news: [
  //   //     {
  //   //       id: 1,
  //   //       name: 'John',
  //   //     },
  //   //     {
  //   //       id: 2,
  //   //       name: 'Rick',
  //   //     },
  //   //   ],
  //   //   name: 'Alyona',
  //   //   sirname: 'Jestakova',
  //   //   avatar: {
  //   //     '200x200': 'https://google.ru',
  //   //     fullSize: 'https://gaggle.tu',
  //   //   },
  //   //   boing: {
  //   //     model: {
  //   //       typeS: '737',
  //   //       typeR: [
  //   //         717,
  //   //         718,
  //   //         719,
  //   //         720,
  //   //       ],
  //   //     },
  //   //   },
  //   // };
  //   // const {
  //   //   news,
  //   //   name,
  //   //   sirname,
  //   //   avatar,
  //   //   boing
  //   // } = this.state;
  //   // const [firstNews, secondNews] = news;
  //   // const { id: id1, name: name1 } = firstNews;
  //   // const { id: id2, name: name2 } = secondNews;
  //   // const { '200x200': x, fullSize } = avatar;
  //   // const { model } = boing;
  //   // const { typeS, typeR } = model;
  //   // const [a, b, c, d] = typeR;
  //   //
  //   // // const
  //   // console.log(id1, id2, name1, name2, name, sirname, fullSize, x, typeS, a, b, c, d);
  // }

  render() {
    const { resetHandler, sortByDateHandler, sortByGoodHandler } = this.props;
    return (
      <div className="filter">
        <button
          className="filter__btn"
          type="button"
          onClick={resetHandler}
        >
          All
        </button>
        <button
          className="filter__btn"
          type="button"
          onClick={sortByDateHandler}
        >
          by date enable
        </button>
        <button
          className="filter__btn"
          type="button"
          onClick={sortByGoodHandler}
        >
          by good news
        </button>
      </div>
    );
  }
}
export default Filter;
