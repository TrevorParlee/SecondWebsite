import React from "react";
import CardItems from "./CardItems";
import "./Cards.css";

function Cards() {
  return (
    <div className="cards">
      <h1>Check these out</h1>
      <div className="cards__container">
        <div className="ards__wrapper">
          <ul className="cards__items">
            <CardItems
              src="images/img-8.jpg"
              text="explore this"
              label="picture"
              path="/services"
            />
            <CardItems
              src="images/img-1.jpg"
              text="This is cool"
              label="picture"
              path="/services"
            />
            <CardItems
              src="images/img-2.jpg"
              text="explore this"
              label="picture"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItems
              src="images/img-8.jpg"
              text="explore this"
              label="picture"
              path="/services"
            />
            <CardItems
              src="images/img-1.jpg"
              text="This is cool"
              label="picture"
              path="/services"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
