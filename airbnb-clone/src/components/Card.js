import React from "react";
import "./Card.css";
import Image from "../assets/image_12.png";
import Star from "../assets/Star_1.png";

function Card() {
  return (
    <div className="Card">
      <img src={Image} className="Card__image"></img>
      <p className="Card__rating">
        <img src={Star} className="Card__rating__star"></img> 5.0{" "}
        <a className="Card__rating__details">(6) - USA</a>
      </p>
      <p className="Card__heading">Life lessons with Katie Zaferes</p>
      <p>
        <a className="Card__price">From $136</a> / person
      </p>
    </div>
  );
}

export default Card;
