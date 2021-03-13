import React, { useEffect } from "react";
import FilterTags from "../../components/FilterTags/FilterTags";
import "./about.scss";

const About = ({ translation, setActiveProjectColor }) => {
  useEffect(() => {
    setActiveProjectColor("#0C4C7A");
  }, [setActiveProjectColor]);

  return (
    <div className="about-container">
      <img
        className="about-grid-item headshot"
        src="/images/sean-headshot2.jpeg"
      />
      <div className="about-grid-item tags">
        <FilterTags translation={translation} location="about" />
      </div>
      <div className="about-grid-item about-text">
        <p>
          Hi, I’m Sean. I'm a designer and front-end developer based in Madrid,
          España. I'm currently seeking opportunities in either of these areas,
          or ideally, a combination of both. I love to create memorable
          experiences through the use of branding and web design. In my humble
          opinion, too many brands are following the same 'corporate' layout and
          making similar strides as their competition. I aim to break down these
          barriers in a mindful way that highlight the importance of the brand.
          I'm a life-long student and am always trying to learn new techniques,
          technologies, and languages. When I'm not working or learning, you can
          catch me hiking the great outdoors, curating Spotify playlists, and
          sparking conversations with strangers.
        </p>
      </div>
    </div>
  );
};

export default About;
