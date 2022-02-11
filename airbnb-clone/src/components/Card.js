import React from "react";
import "./Card.css";
import Image from "../assets/image_12.png";
import Star from "../assets/Star_1.png";

function Card() {
  return (
    <div className="Card">
      <img src={Image} className="Card__image"></img>
      <div className="Card__text">
        <p className="Card__rating">
          <img src={Star} className="Card__rating__star"></img> 5.0{" "}
          <span className="Card__rating__details">(6) - USA</span>
        </p>
        <p className="Card__heading">Life lessons with Katie Zaferes</p>
        <p>
          <span className="Card__price">From $136</span> / person
        </p>
      </div>
    </div>
  );
}

export default Card;
