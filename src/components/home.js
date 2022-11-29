import React from "react";
import profile from "../assets/profile.svg";
import search from "../assets/search.svg";
import cart from "../assets/cart.svg";
import glass from "../assets/glass.png";
import video from "../assets/sliderbackground.jpg";
import image from "../assets/image.png";
import image1 from "../assets/image1.png";
import image2 from "../assets/image2.png";
import image3 from "../assets/image3.png";
import image4 from "../assets/image4.png";
import image5 from "../assets/image5.png";
import banner2 from "../assets/banner2.png";
import Bitmapimage1 from "../assets/Bitmapimage-1.png";
import Bitmapimage2 from "../assets/Bitmapimage-2.png";
import Bitmapimage3 from "../assets/Bitmapimage-3.png";
import Bitmapimage4 from "../assets/Bitmapimage-4.png";
import Bitmapimage5 from "../assets/Bitmapimage-5.png";
import Bitmapimage6 from "../assets/Bitmapimage-6.png";
import Bitmapimage7 from "../assets/Bitmapimage-7.png";
import Bitmapimage8 from "../assets/Bitmapimage-8.png";
import Bitmapimage9 from "../assets/Bitmapimage-9.png";
import Bitmapimage10 from "../assets/Bitmapimage-10.png";
import Bitmapimage11 from "../assets/Bitmapimage-11.png";
import Bitmapimage12 from "../assets/Bitmapimage-12.png";
import Bitmapimage13 from "../assets/Bitmapimage-13.png";
import Bitmapimage14 from "../assets/Bitmapimage-14.png";
import Bitmapimage15 from "../assets/Bitmapimage-15.png";
import Bitmapimage16 from "../assets/Bitmapimage-16.png";
import Bitmapimage17 from "../assets/Bitmapimage.png";
// import Bitmapimage18 from "../assets/Bitmapimg.png";
// import insta from "../assets/insta.svg";
// import twitter from "../assets/Pathtwitter.png";
// import fb from "../assets/fb.svg";
// import linkedin from "../assets/Shapelinkedin.png";
// import youtube from "../assets/youtube.svg";


import "../styles/home.css";

const Home = () => {
  return (
    <>
      <section className="section-first">
        <div className="background" />
        <div className="brand-name">WINESCHOOL</div>
        <div className="nav-links">
          <div className="links">COURSES</div>
          <div className="links">QUIZZES</div>
          <div className="links">RETAIL</div>
          <div className="links">LOCATION</div>
        </div>
        <div className="icons">
          <img src={profile} className="nav-icons" />
          <img src={search} className="nav-icons" />
          <img src={cart} className="nav-icons" />
        </div>
        <div className="cart1-icon">1</div>
        <button className="enquiry-button">ENQURE NOW</button>
        <div className="description">
          <div className="desc-1">
            The provider of the<br /> internationally recognized<br /> Wine and Spirits Education<br /> Trust qualifications
          </div>
          <div className="desc-2">
            In the Caribbean, Central America and Mexico.
          </div>
          <button className="enroll">ENROLL NOW</button>
        </div>
        <div className="bottom-box">
          <div className="details-box">
            <div className="numbers">14</div>
            <div className="numbers">18+</div>
            <div className="numbers">50+</div>
            <div className="numbers">5,000+</div>
          </div>
          <div className="details-box2">
            <div className="after-numbers">Locations Worldwide</div>
            <div className="after-numbers">Years of experience</div>
            <div className="after-numbers">Expert Teachers</div>
            <div className="after-numbers">Locations Worldwide</div>
          </div>
        </div>
      </section>
      <section className="section-second">
        <div className="about-page">
          <div className="about">
            <div className="about-1">
              About <br /> wineschool3
            </div>
            <div className="about-2">
              Wineschool3 is a provider of the internationally<br /> recognized Wine and Spirits Education Trust <br /> qualifications in the Caribbean and Central<br /> America and pride
            </div>
            <button className="story">OUR STORY</button>
          </div>
          <img src={glass} className="glass" />
        </div>
      </section>
      <section className="section-third">
        <div className="class">
          Preview master class
        </div>
        <div className="class-2">
          See some of our 80+ world-class instructors
        </div>
        <img className="class-3" src={video} />
      </section>
      <section className="section-fourth">
        <div className="class">
          Explore courses
        </div>
        <div className="bar" />
        <div className="courses">
          Filter by category
        </div>
        <div className="filters">
          <div className="filter">All</div>
          <div className="filter">Wine Courses</div>
          <div className="filter">Bar Courses</div>
          <div className="filter">FAQ English</div>
          <div className="filter">FAQ Espanol</div>
          <div className="filter">2020 Online Course Dates</div>
          <div className="filter">2020 Classroom Dates</div>
        </div>
        <div className="bar2" />
        <div className="image-layout1">
          <div className="image-box">
            <img src={image} className="images" />
            <div className="img-desc">
              <div className="image-head">
                WSET
              </div>
              <div className="image-head2">
                Wines, Spirits, Sake, Online courses
              </div>
            </div>
          </div>
          <div className="image-box">
            <img src={image1} className="images" />
            <div className="img-desc">
              <div className="image-head">
                Wine Scholar Guild
              </div>
              <div className="image-head2">
                French and Italian Wine Scholar
              </div>
            </div>
          </div>
          <div className="image-box">
            <img src={image2} className="images" />
            <div className="img-desc">
              <div className="image-head">
                Spain Wine School
              </div>
              <div className="image-head2">
                Spain Wine Experience, Wine Business & Marketing
              </div>
            </div>
          </div>
        </div>
        <div className="image-layout2">
          <div className="image-box">
            <img src={image3} className="images" />
            <div className="img-desc">
              <div className="image-head">
                Consultancy
              </div>
              <div className="image-head2">
                Wine and drinks in general represent a very
                important
              </div>
            </div>
          </div>
          <div className="image-box">
            <img src={image4} className="images" />
            <div className="img-desc">
              <div className="image-head">
                Wineschool3 Courses
              </div>
              <div className="image-head2">
                Custom Designed Courses
              </div>
            </div>
          </div>
          <div className="image-box">
            <img src={image5} className="images" />
            <div className="img-desc">
              <div className="image-head">
                WSET
              </div>
              <div className="image-head2">
                Wines, Spirits, Sake, Online courses
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section-fifth">
        <img src={banner2} className="banner2" />
        <div className="saying-head">
          What students are saying
        </div>
        <div className="saying-number">
          1/6
        </div>
        <div className="saying">
          “A Game Changer"' Wineschool3 has <br />proven to be a game changer; no more<br /> unclear values for wine courses.”
        </div>
        <div className="saying-by">
          Jason Cyr, Director of Design Transformation, Cisco
        </div>
      </section>
      <section className="section-sixth">
        <div className="company">
          We’ve mentored over 5,000 companies and<br /> 30,000 people across 40 countries
        </div>
        <div className="sponsor-layout">
          <div className="sponsors">
            <img src={Bitmapimage1} className="sponsor-image" />
            <img src={Bitmapimage2} className="sponsor-image" />
            <img src={Bitmapimage3} className="sponsor-image" />
            <img src={Bitmapimage4} className="sponsor-image" />
            <img src={Bitmapimage5} className="sponsor-image" />
          </div>
          <div className="sponsors">
            <img src={Bitmapimage10} className="sponsor-image" />
            <img src={Bitmapimage2} className="sponsor-image" />
            <img src={Bitmapimage15} className="sponsor-image" />
            <img src={Bitmapimage17} className="sponsor-image" />
            <img src={Bitmapimage5} className="sponsor-image" />
          </div>
          <div className="sponsors">
            <img src={Bitmapimage6} className="sponsor-image" />
            <img src={Bitmapimage7} className="sponsor-image" />
            <img src={Bitmapimage8} className="sponsor-image" />
            <img src={Bitmapimage9} className="sponsor-image" />
            <img src={Bitmapimage16} className="sponsor-image" />
          </div>
          <div className="sponsors">
            <img src={Bitmapimage11} className="sponsor-image" />
            <img src={Bitmapimage12} className="sponsor-image" />
            <img src={Bitmapimage13} className="sponsor-image" />
            <img src={Bitmapimage14} className="sponsor-image" />
            <img src={Bitmapimage13} className="sponsor-image" />
          </div>
        </div>
      </section>
      <section className="section-seventh">
        <div className="blog-head">
          Orange Blog
        </div>
      </section>
    </>
  );
};

export default Home;
