import React from 'react';
import './images.css';

const Image = props => {

  return (

    <div className="col-4 col-md-3 image-container">
      <div className="image"
        style={{
          border: `10px solid ${props.color}`,
          borderRadius: "5px"
        }}
        onClick={() => props.clicked(props.id)}>
        <img className="image-img" alt={props.name} src={props.source} />
      </div>
    </div>

  );
}


export default Image;