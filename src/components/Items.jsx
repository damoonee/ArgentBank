import React from "react";
import "../css/Items.css";

function Item ({ image, descritionImage, title, description }) {
    return (
        <div className="feature-item">
            <img src={image} alt={descritionImage} className="feature-item-icon"/>
            <h3 className="feature-item-title">{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default Item