import React, { Component } from 'react';

import Footer from './components/Footer';
import NewsBlock from './components/NewsBlock';
import LearnApp from './components/LearnApp';

import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      text: 'gagsa',
      blockNumber: 0,
    };
  }

  inputText = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  btnAction = (e) => {
    this.setState({
      text: e,
    });
  };

  changeToNews = () => {
    this.setState({
      blockNumber: 1,
    });
  };

  changeToLearn = () => {
    this.setState({
      blockNumber: 2,
    });
  };

  render() {
    const { text, blockNumber } = this.state;
    return (
      <div className="App">
        <header className="App__header">
          <div className="App__input-holder input-holder">
            <input
              type="text"
              value={text}
              // onChange={this.inputText}
              onChange={e => this.inputText(e)}
            />
          </div>
          <div className="App__header-tabs">
            <button
              className="App__header-btn"
              type="button"
              onClick={this.changeToNews}
            >
              NEWS
            </button>
            <button
              className="App__header-btn"
              type="button"
              onClick={this.changeToLearn}
            >
              LEARN
            </button>
          </div>
        </header>
        { blockNumber === 1 && <NewsBlock /> }
        { blockNumber === 2 && <LearnApp /> }
        <Footer
          value={text}
          action={this.btnAction}
        />
      </div>
    );
  }
}

export default App;
