import React from "react";
import "./nuego.css";
import "./caro.css";
import NuegoImage from "../../assets/nuego.png";
import AmeImage1 from "../../assets/am1.png";
import AmeImage2 from "../../assets/am2.png";
import AmeImage3 from "../../assets/am3.png";
import AmeImage4 from "../../assets/am4.png";
import AmeImage5 from "../../assets/am5.png";
import NearLocation1 from "../../assets/near1.png";
import NearLocation2 from "../../assets/near2.png";
import NearLocation3 from "../../assets/near3.png";
import { Title } from "../reusable-style";
import { Paragraph } from "../reusable-style";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
// import "./in.css";
import Caro from "../../assets/caro.png";

const Nuego = () => {
  const amenties = [
    {
      name: "Clean Washrooms",
      img: AmeImage1,
    },
    {
      name: "Free Wifi",
      img: AmeImage2,
    },
    {
      name: "Charging Points",
      img: AmeImage3,
    },
    {
      name: "Air Conditoned",
      img: AmeImage4,
    },
    {
      name: "Cafe Restaurant",
      img: AmeImage5,
    },
  ];

  const options = {
    loop: true,
    margin: 10,
    items: 1,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1000: {
        items: 3,
      },
    },
  };
  const carouselContent = [
    {
      image: Caro,
      subTittle: "Indore",
      Para: " 12C, Warehouse Road, Mechanic Nagar, Scheme #54 Vijaynagar,Indore MP - 452011",
      contact: "+91 90399 44417",
    },
    {
      image: Caro,
      subTittle: "Indore",
      Para: " 12C, Warehouse Road, Mechanic Nagar, Scheme #54 Vijaynagar,Indore MP - 452011",
      contact: "+91 90399 44417",
    },
    {
      image: Caro,
      subTittle: "Indore",
      Para: " 12C, Warehouse Road, Mechanic Nagar, Scheme #54 Vijaynagar,Indore MP - 452011",
      contact: "+91 90399 44417",
    },
    {
      image: Caro,
      subTittle: "Indore",
      Para: " 12C, Warehouse Road, Mechanic Nagar, Scheme #54 Vijaynagar,Indore MP - 452011",
      contact: "+91 90399 44417",
    },
    {
      image: Caro,
      subTittle: "Indore",
      Para: " 12C, Warehouse Road, Mechanic Nagar, Scheme #54 Vijaynagar,Indore MP - 452011",
      contact: "+91 90399 44417",
    },
    {
      image: Caro,
      subTittle: "Indore",
      Para: " 12C, Warehouse Road, Mechanic Nagar, Scheme #54 Vijaynagar,Indore MP - 452011",
      contact: "+91 90399 44417",
    },
  ];

  return (
    <section className="nuego">
      <div className="common-nav">
        <a id="nav" href="/">
          Home
        </a>
        <a href="/">/</a>
        <a href="/">Lucky Draw</a>
      </div>
      <div className="nuego-search">
        <Title>NueGo Lounge</Title>
        <form className="nosubmit">
          <input
            className="nosubmit"
            type="search"
            placeholder="Search for your city"
          />
        </form>
      </div>
      <div className="nuego-image">
        <img src={NuegoImage} alt="" />
        <p>
          Safety and Comfort are the two most important focus areas for NueGo,
          and our premium Lounges were designed with that in mind. Now our
          Guests can enjoy the wide range of amenities in one of our Lounges
          while they waiting to board their NueGo ride!
        </p>
      </div>
      <div>
        <h4 className="amenti-heading">Amenities available</h4>
        <div className="amenti-part">
          {amenties.map((element, index) => (
            <div className="amenti" key={index}>
              <img src={element.img} alt=""></img>
              <h2>{element.name}</h2>
            </div>
          ))}
        </div>
      </div>

      <Title>Find your Lounge</Title>
      <Paragraph>
        Available in Select locations, and expanding to more soon!
      </Paragraph>
      {/* carousel part */}
      <div>
        <div className="container-fluid ">
          <OwlCarousel {...options} className="owl-theme set" loop nav>
              {carouselContent.map((ele, index) => (
                <div key={index} className="card">
                  <img className="img" alt="" src={ele.image} />
                  <div className="caro-card-cont">
                    <h4>{ele.subTittle}</h4>
                    <p>
                      {ele.Para}
                    </p>
                    <p>{ele.contact}</p>
                  </div>
                </div>
              ))}
          </OwlCarousel>
        </div>
      </div>

      <div className="near-location">
        <Title className="near-heading">Coming Soon near your location</Title>
        <div className="near-location-img">
          <img src={NearLocation1} alt=""></img>
          <div className="near-position">
            <h1>Bhopal</h1>
          </div>
        </div>
        <div className="near-location-img">
          <img src={NearLocation2} alt=""></img>
          <div className="near-position">
            <h1>Delhi</h1>
            <p>RK Ashram</p>
          </div>
        </div>
        <div className="near-location-img">
          <img src={NearLocation3} alt=""></img>
          <div className="near-position">
            <h1>Delhi</h1>
            <p>Kashmiri Gate</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Nuego;
