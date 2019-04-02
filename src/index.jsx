import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import './css/style.css';

import NavBar from './components/navBar';

class App extends Component {
  constructor(props) {
    super(props); 
    this.state = {  };
  }
  render () {
    return (
      <NavBar />
    )
  }
}

ReactDOM.render(<App />, document.querySelector('#root'));