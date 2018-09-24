import React, { Component } from 'react';
import News from './learn_block/News';

const LearnApp = () => {
  const myNews = [
    {
      id: 1,
      author: 'Саша Печкин',
      text: 'В четверг, четвертого числа...',
      bigText: 'в четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили чёрными чернилами чертёж.',
    },
    {
      id: 2,
      author: 'Просто Вася',
      text: 'Считаю, что $ должен стоить 35 рублей!',
      bigText: 'А евро 42!',
    },
    {
      id: 3,
      author: 'Max Frontend',
      text: 'Прошло 2 года с прошлых учебников, а $ так и не стоит 35',
      bigText: 'А евро опять выше 70.',
    },
    {
      id: 4,
      author: 'Гость',
      text: 'Бесплатно. Без смс, про реакт, заходи - https://maxpfrontend.ru',
      bigText: 'Еще есть группа VK, telegram и канал на youtube! Вся инфа на сайте, не реклама!',
    },
  ];
  // let someObject = {
  //   name: 'Alex',
  //   age: 17,
  //   color: 'white',
  // };
  // // let myNewNews = Object.assign({}, someObject, { color: 'black' });
  // let myNewNews = { ...someObject, color: 'black' };
  // console.log('_______');
  // console.log(myNewNews);
  // console.log('_______');
  return (
    <React.Fragment>
      <h3>Новости</h3>
      <News data={myNews} />
    </React.Fragment>
  );
};

export default LearnApp;
