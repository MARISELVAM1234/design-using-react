import React from "react";
import "./lucky-draw.css";
import LuckyImage from "../../assets/lucky.png";
import Win1 from "../../assets/win1.png";
import Win2 from "../../assets/win2.png";
import Win3 from "../../assets/win3.png";
import Win4 from "../../assets/win4.png";
import Win5 from "../../assets/win5.png";
import Win6 from "../../assets/win6.png";
import { Paragraph } from "../reusable-style";
import { Title } from "../reusable-style";
import { NameTerms } from "../reusable-style";

const LuckyDraw = () => {
  const winner = [
    {
      img: Win1,
      name: "Alia Bhatt",
    },
    {
      img: Win2,
      name: "Rakesh k",
    },
    {
      img: Win3,
      name: "Jessica H",
    },
    {
      img: Win4,
      name: "Shraddha A",
    },
    {
      img: Win5,
      name: "Aayushi S",
    },
    {
      img: Win6,
      name: "Vicky Singh",
    },
  ];

  return (
    <section>
    <div className="lucky-draw">
      <div className="common-nav">
        <a id="nav" href="/">
          Home
        </a>
        <a href="/">/</a>
        <a href="/">Lucky Draw</a>
      </div>
      <div>
        <Title>NueGo Lucky Draw Results</Title>
        <img className="lucky-image" src={LuckyImage} alt=""></img>
        <Title>Winner’s List</Title>
        <Paragraph>
          Meet the lucky ones who have won free travel for a year on our Indore
          - Bhopal route
        </Paragraph>
      </div>
      <div className="winner-list">
        {winner.map((element, index) => (
          <div className="winner" key={index}>
            <img src={element.img} alt=""></img>
            <NameTerms>{element.name}</NameTerms>
          </div>
        ))}
      </div>
      
      </div>


      <div className="terms-policies">
        <NameTerms>Policies and T&C*</NameTerms>
        <p>
          Winners will have to present valid ID proof at the time of boarding
          their free trip, failing which they will be charged the Route fare in
          full. NueGo reserves the right to revoke the offer any time and all
          decisions taken by NueGo are binding and final.
        </p>
      </div>
    </section>
  );
};

export default LuckyDraw;
