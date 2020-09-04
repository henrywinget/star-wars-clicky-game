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
    message: "MEMORY GAME"
  }

  // When the user guesses incorrectly, end game
  endGame = () => {
    if (this.state.score > this.state.highScore) {
      this.setState({
        highScore: this.state.score
      }, () => console.log(this.state.highScore));
    }

    const images = this.state.images.map(image => {
      image.clicked = false;
      return image;
    });

    alert("Game over. Want to play again?");
    this.setState({ images, score: 0 });
    return true;
  }

  // When clicked, check the count for each image by id prop
  clicked = id => {

    // Find the index of the image and compare to id prop
    this.state.images.find((image, index) => {

      if (image.id === id) {
        // If the image at the index has has not been clicked, change it to clicked
        if (!image.clicked) {
          image.clicked = true;
          // Rearrange the images

          const images = this.state.images.sort(() => Math.random() - 0.5);
          // Update the score with each successful click
          this.setState({ score: this.state.score + 1, images: [...images] }, () => console.log(this.state.score));

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
          <h1 className="App-title">STAR WARS</h1>
          <p className="App-rules">{this.state.score === 0 ? this.state.message :
            this.state.score > 0 ? "Don't mess up!" : null}</p>
        </header>
        <div className="container game-area">
          <div className="row images-row">
            {this.state.images.map(image => (
              <Image
                id={image.id}
                key={image.id}
                name={image.name}
                color={image.color}
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
