import React from "react";
import "./Hero.css";
import Collage from "../assets/Group_77.png";

function Hero() {
  return (
    <div className="Hero">
      <div className="Hero__Container">
        <img className="Hero__Collage" src={Collage}></img>
      </div>
      <article className="Hero__Punchline">
        <h1>Online Experiences</h1>
        <h3>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </h3>
      </article>
    </div>
  );
}

export default Hero;
