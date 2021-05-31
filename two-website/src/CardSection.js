import React from "react";
import Card from "./Card";
const CardSection = () => (
  <section className="contact bg-success ">
    <div className="container ">
      <h2 className="text-white">We love new friends!</h2>
      <div className="row">
        <div className="col-4">
          <Card
            title="React Card"
            buttonText="Read More"
            description="Some quick example text to build on the card title and make up the
          bulk of the card's content."
          />
        </div>
        <div className="col-4">
          <Card
            title="Angular Card"
            buttonText="Read More"
            description="Some quick example text to build on the card title and make up the
          bulk of the card's content."
            cardImage="https://images.pexels.com/photos/3532544/pexels-photo-3532544.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
        </div>
        <div className="col-4">
          <Card
            title="Vue Card"
            buttonText="Read More"
            description="Some quick example text to build on the card title and make up the
          bulk of the card's content."
            cardImage="https://images.pexels.com/photos/2522663/pexels-photo-2522663.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          />
        </div>
      </div>
    </div>
  </section>
);

export default CardSection;
