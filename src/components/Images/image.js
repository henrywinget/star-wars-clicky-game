import React, { Component } from 'react';

class Image extends Component {
  render() {
  

    return (
      <div className="Images">
        <img src = {this.props.source} alt = {this.props.name} />
      </div>
    );
  }
}

export default Image;