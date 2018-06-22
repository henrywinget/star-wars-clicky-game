import React, { Component } from 'react';
import './images.css';

class Image extends Component {
  render() {


    return (
      
      <div className ="card col-md-3">
        <div className="img-container">
          <img alt={this.props.name} src={this.props.source} />
        </div>
      </div>
      
    );
  }
}

export default Image;