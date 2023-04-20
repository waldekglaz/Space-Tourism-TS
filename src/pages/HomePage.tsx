import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="page home">
      <div className="home__wrapper">
        <div className="eyebrow">SO, YOU WANT TO TRAVEL TO</div>
        <div className="home__title">SPACE</div>
        <p className="text">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
      </div>
      <Link to="/destinations/Mars">EXPLORE</Link>
    </div>
  );
};

export default HomePage;
