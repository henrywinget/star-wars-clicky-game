import React from 'react';
import './images.css';

const Image = props => {

    return (
      
      <div className ="col-md-3">
        <div className="image"
        onClick={ () => props.clicked(props.id) }>
          <img alt={props.name} src={props.source} />
        </div>
      </div>
      
    );
  }


export default Image;