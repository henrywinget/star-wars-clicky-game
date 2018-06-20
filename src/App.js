import React, { Component } from 'react';
import logo from './logo.svg'
import Images from './components/images'
import './App.css';
import yoda from '../public/assets/pictures/yoda.png';
import vader from '../public/assets/pictures//vader.png';
import windu from '../public/assets/pictures//windu.png';
import ren from '../public/assets/pictures/ren.png';
import dooku from '../public/assets/pictures/dooku.png';
import luke from '../public/assets/pictures/luke.png';
import obi from '../public/assets/pictures/obi.png';
import rey from '../public/assets/pictures/rey.png';
import maul from '../public/assets/pictures/maul.png';
import asajj from '../public/assets/pictures/asajj.png';
import qui from '../public/assets/pictures/qui.png';
import palp from '../public/assets/pictures/palp.png';

class App extends Component {
  
  constructor() {
    super();
    this.state = {
      images: []
    }
  }

  componentWillMount(){
    this.setState({images: [
      {
        name: 'Yoda',
        source: {yoda}
      },
      {
        name: 'Mace Windu',
        source: {windu}
      },
      {
        name: 'Darth Vader',
        source: {vader}
      },
      {
        name: 'Rey',
        source: {rey}
      },
      {
        name: 'Kylo Ren',
        source: {ren}
      },
      {
        name: 'Qui-Gon Jinn',
        source: {qui}
      },
      {
        name: 'Darth Sidious',
        source: {palp}
      },
      {
        name: 'Obi-Wan Kenobi',
        source: {obi}
      },
      {
        name: 'Darth Maul',
        source: {maul}
      },
      {
        name: 'Luke Skywalker',
        source: {luke}
      },
      {
        name: 'Asajj Ventress',
        source: {asajj}
      },
      {
        name: 'Count Dooku',
        source: {dooku}
      }
    ]})
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
