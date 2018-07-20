import React from "react";
import "./imagecard.css";


const ImageCard = props => (
    <div className="card">
        {props.image.map(image => (
            <div className="img-container" key={image.id}>
                <img src={props.image} />
            </div>
        ))}
    </div>
);

export default ImageCard;
