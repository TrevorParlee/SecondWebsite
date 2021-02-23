import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./HeroSection.css";

function HeroSection() {
  return (
    <div className="hero-container">
      <video src="../../videos/video-4.mp4" autoPlay loop muted />
      {/* <img src="../images/img-5.jpg" alt="my set up" className="image" /> */}
      <h1>What are you waiting for?</h1>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          Get Started
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
          Watch Trailer <i className="far fa-play-cirlce" />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;
