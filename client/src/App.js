import React, {Component} from 'react';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Header />
        </div>
      </Router>
    )
  }
}

export default App;