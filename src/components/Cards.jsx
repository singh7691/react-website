import React from "react";
import CardItem from "./CardItem";
import "./Cards.css";
import cardImage from "../assets/images/img-9.jpg";
import cardImage1 from "../assets/images/img-2.jpg";
import cardImage2 from "../assets/images/img-3.jpg";
import cardImage3 from "../assets/images/img-4.jpg";
import cardImage4 from "../assets/images/img-8.jpg";

function Cards() {
  return (
    <div>
      <div className="cards">
        <h1>Check out these EPIC Destinations!</h1>
        <div className="cards__container">
          <div className="cards__wrapper">
            <ul className="cards__items">
              <CardItem
                src={cardImage}
                text="Explore the hidden waterfall deep inside the Amazon Jungle"
                label="Adventure"
                path="/services"
              />
              <CardItem
                src={cardImage1}
                text="Travel through the Islands of Bali in a Private Cruise"
                label="Luxury"
                path="/services"
              />
            </ul>
            <ul className="cards__items">
              <CardItem
                src={cardImage2}
                text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
                label="Mystery"
                path="/services"
              />
              <CardItem
                src={cardImage3}
                text="Experience Football on Top of the Himilayan"
                label="Adventure"
                path="/products"
              />
              <CardItem
                src={cardImage4}
                text="Ride throug the Sahara Desert on a guided camel tour"
                label="Adrenaline"
                path="/sign-up"
              />
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
