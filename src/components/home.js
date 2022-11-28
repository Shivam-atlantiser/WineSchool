import React from "react";
import profile from "../assets/profile.svg";
import search from "../assets/search.svg";
import cart from "../assets/cart.svg";
import "../styles/home.css";

const Home = () => {
  return (
    <>
      <div className="background" />
      <div className="nav-links">
        <div className="brand-name">WINESCHOOL</div>
        <div className="links">COURSES</div>
        <div className="links">QUIZZES</div>
        <div className="links">RETAIL</div>
        <div className="links">LOCATION</div>
        <img src={profile} className="nav-icons" />
        <img src={search} className="nav-icons" />
        <img src={cart} className="nav-icons" />
        <button className="enquiry-button">ENQURE NOW</button>
      </div>
      <div className="details-box">
        <div className="numbers">14</div>
        <div className="numbers">18+</div>
        <div className="numbers">50+</div>
        <div className="numbers">5,000+</div>
      </div>
      <div className="details-box">
        <div className="after-numbers">Locations Worldwide</div>
        <div className="after-numbers">Years of experience</div>
        <div className="after-numbers">Expert Teachers</div>
        <div className="after-numbers">Locations Worldwide</div>
      </div>
    </>
  );
};

export default Home;
