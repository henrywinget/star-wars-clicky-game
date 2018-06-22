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


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Star Wars Clicky Game!</h1>
          <p>What else would you expect?</p>
        </header>
        <div className="container-fluid ">
        <div className = "row">
          {this.state.images.map(image => (
            <Image

              id={image.id}
              key={image.id}
              name={image.name}
              source={image.source}
              clicked={image.clicked}
            />
          ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
