import React, { Component } from 'react';
import Header from './components/Header';
import Cards from './components/Cards';
import TopNav from './components/TopNav';

import './App.css';
class App extends Component {
  render() {
    return (
      <div className="App">
        <TopNav />
        <Header />
        <Cards />
      </div>
    );
  }
}

export default App;
