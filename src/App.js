import React, { Component } from 'react';
import './App.css';
import Footer from './components/Footer';
import NewsBlock from './components/NewsBlock';

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
    return (
      <div className="App">
        <header className="App-header">
          <input
            type="text"
            value={this.state.text}
            onChange={this.inputText}
          />
        </header>
        <NewsBlock />
        <Footer
          value={this.state.text}
          action={this.btnAction}
        />
      </div>
    );
  }
}

export default App;
