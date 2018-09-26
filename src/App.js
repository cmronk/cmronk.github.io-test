import React, { Component } from 'react';
import Header from './components/Header';
import Cards from './components/Cards';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Cards />
      </div>
    );
  }
}

export default App;
