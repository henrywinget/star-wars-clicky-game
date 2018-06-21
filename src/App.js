import React, { Component } from 'react';
import logo from './logo.svg'
import Images from './components/images'
import './App.css';


class App extends Component {
  
  constructor() {
    super();
    this.state = {
      images: []
    }
  }

  componentWillMount(){
    this.setState({images})
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Star Wars Clicky Game!</h1>
          <p>What else would you expect?</p>
        </header>
        <Images images = {this.state.images}/>
      </div>
    );
  }
}

export default App;
