//Importing all React dependencies
import React, { Component } from 'react';
import logo from './logo.svg';
import images from './images.json';
import Image from './components/Images';
import './App.css';

//React app
class App extends Component {

  //initial state
  state = {
    score: 0,
    highScore: 0,
    images,
    message: "Click a picture to begin. This is a memory game; click the same one twice and you lose!"
  }

  // When the user guesses incorrectly, end game
  endGame = () => {
    if (this.state.score > this.state.highScore) {
      this.setState({
        highScore: this.state.score
      }, () => console.log(this.state.highScore));
    }

    this.state.images.forEach(image => {
      image.clicked = false
    });

    alert("Game over. Want to play again?");
    this.setState({ score: 0 });
    return true;
  }

  // When clicked, check the count for each image by id prop
  clicked = id => {

    // Find the index of the image and compare to id prop
    this.state.images.find((image, index) => {

      if (image.id === id) {
        // If the image at the index has has not been clicked, change it to clicked
        if (images[index].clicked === false) {
          images[index].clicked = true;

          // Update the score with each successful click
          this.setState({ score: this.state.score + 1 }, function () {
            console.log(this.state.score);
          });

          // Rearrange the images

          this.state.images.sort(() => Math.random() - 0.5);
          return true;
        }
        // Else, end the game
        else {
          return this.endGame();
        }
      }
    });
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Star Wars Clicky Game!</h1>
          <p>{this.state.score === 0 ? this.state.message :
            this.state.score > 0 ? "Don't mess up!" : null}</p>
        </header>

        <div className="container">
          <div className="row images-row">
            {this.state.images.map(image => (
              <Image
                id={image.id}
                key={image.id}
                name={image.name}
                source={image.source}
                clicked={this.clicked}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
