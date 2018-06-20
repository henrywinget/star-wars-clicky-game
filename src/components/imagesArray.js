import React, { Component } from 'react';


class ImagesArray extends Component {
  
  render() {

    return (
        <div className="ImagesArray">
          <img src = {this.props.images.source} alt = {this.props.images.name}/>
        </div>
    );
  }
}

export default ImagesArray;