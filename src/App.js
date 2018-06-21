import React, { Component } from 'react';
import logo from './logo.svg';
import images from './images.json';
import Image from './components/Images';
import './App.css';


class App extends Component {
  
  state = {
    score: 0,
    highScore: 0,
    images,
    message: "Click a picture to begin. This is a memory game; click the same one twice and you lose!"
  }

  // componentWillMount(){
  //   this.setState({images})
  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Star Wars Clicky Game!</h1>
          <p>What else would you expect?</p>
        </header>
        <Image images = {this.state.images}/>
      </div>
    );
  }
}

export default App;
