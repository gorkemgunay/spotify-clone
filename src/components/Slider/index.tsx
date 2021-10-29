import React from "react";
import "./Slider.css";

interface Props {}

const index: React.FC<Props> = () => {
  return (
    <div className="slider">
      <div className="slider__top">
        <h2>Your top genres</h2>
        <div className="slider__cards">
          <div className="slider__card">
            <h3>Hip Hop</h3>
            <span></span>
          </div>
          <div className="slider__card">
            <h3>Hip Hop</h3>
            <span></span>
          </div>
          <div className="slider__card">
            <h3>Hip Hop</h3>
            <span></span>
          </div>
        </div>
      </div>
      <div className="slider__bottom">
        <h2>Browse all</h2>
        <div className="slider__miniCards">
          <div className="slider__miniCard">
            <h3>Podcasts</h3>
            <span></span>
          </div>

          <div className="slider__miniCard">
            <h3>Podcasts</h3>
            <span></span>
          </div>

          <div className="slider__miniCard">
            <h3>Podcasts</h3>
            <span></span>
          </div>

          <div className="slider__miniCard">
            <h3>Podcasts</h3>
            <span></span>
          </div>

          <div className="slider__miniCard">
            <h3>Podcasts</h3>
            <span></span>
          </div>

          <div className="slider__miniCard">
            <h3>Podcasts</h3>
            <span></span>
          </div>

          <div className="slider__miniCard">
            <h3>Podcasts</h3>
            <span></span>
          </div>

          <div className="slider__miniCard">
            <h3>Podcasts</h3>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
