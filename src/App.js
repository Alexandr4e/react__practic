import React, { Component } from 'react';

import Footer from './components/Footer';
import NewsBlock from './components/NewsBlock';

import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      text: 'gagsa',
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

  render() {
    const { text } = this.state;
    return (
      <div className="App">
        <header className="App__header">
          <input
            type="text"
            value={text}
            // onChange={this.inputText}
            onChange={e => this.inputText(e)}
          />
          <div className="App__header-tabs">
            <button
              className="App__header-btn"
              type="button"
            >
              NEWS
            </button>
            <button
              className="App__header-btn"
              type="button"
            >
              LEARN
            </button>
          </div>
        </header>
        <NewsBlock />
        <Footer
          value={text}
          action={this.btnAction}
        />
      </div>
    );
  }
}

export default App;
