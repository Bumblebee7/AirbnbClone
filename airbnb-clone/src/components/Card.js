import React from "react";
import "./Card.css";
import Image from "../assets/image_12.png";
import Star from "../assets/Star_1.png";

function Card() {
  return (
    <div className="card">
      <img src={Image} className="card__image"></img>
      <div className="card__text">
        <p className="card__rating">
          <img src={Star} className="card__rating__star"></img> 5.0{" "}
          <span className="card__rating__details">(6) - USA</span>
        </p>
        <p className="card__heading">Life lessons with Katie Zaferes</p>
        <p>
          <span className="card__price">From $136</span> / person
        </p>
      </div>
    </div>
  );
}

export default Card;
