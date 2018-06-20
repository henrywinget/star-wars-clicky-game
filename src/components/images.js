import React, { Component } from 'react';
import ImagesArray from './imagesArray';

class Images extends Component {
  render() {
    let imagesArr;
    console.log(this.props);
    if (this.props.images) {
      imagesArr = this.props.images.map(image => {
        console.log(imagesArr);
        return (
          <ImagesArray key={image.name} image={image.source} />
        );
      });
    }

    return (
      <div className="Images">
        {imagesArr}

      </div>
    );
  }
}

export default Images;