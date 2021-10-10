import React from "react";
import "./Bottombar.css";

import heart from "../../assets/icons/7.svg";
import window from "../../assets/icons/8.svg";
import doubleArrow from "../../assets/icons/9.svg";
import leftArrow from "../../assets/icons/10.svg";
import playButton from "../../assets/icons/11.svg";
import rightArrow from "../../assets/icons/12.svg";
import repeat from "../../assets/icons/13.svg";
import add from "../../assets/icons/14.svg";
import computer from "../../assets/icons/15.svg";
import volume from "../../assets/icons/16.svg";
import fullScreen from "../../assets/icons/17.svg";

interface Props {}

const Bottombar: React.FC<Props> = () => {
  return (
    <div className="bottombar">
      <div className="bottombar__song">
        <div className="bottombar__song--image"></div>
        <div className="bottombar__song--songName">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" className="songName">
            Song Name
          </a>
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" className="artistName">
            Artist Name
          </a>
        </div>
        <img src={heart} alt="spotify-heath" />
        <img src={window} alt="spotify-window" />
      </div>

      <div className="bottombar__player">
        <div className="bottombar__player--top">
          <div>
            <img src={doubleArrow} alt="spotify-doubleArrow" />
          </div>
          <div>
            <img src={leftArrow} alt="spotify-leftArrow" />
          </div>
          <div className="bottombar__player--top--playButton">
            <img src={playButton} alt="spotify-playbutton" />
          </div>
          <div>
            <img src={rightArrow} alt="spotify-rightArrow" />
          </div>
          <div>
            <img src={repeat} alt="spotify-repeat" />
          </div>
        </div>
        <div className="bottombar__player--bottom">
          <p>0:00</p>
          <div></div>
          <p>2:00</p>
        </div>
      </div>

      <div className="bottombar__helper">
        <div>
          <img src={add} alt="spotify-add" />
        </div>
        <div>
          <img src={computer} alt="spotify-computer" />
        </div>
        <div>
          <img src={volume} alt="spotify-volume" />
        </div>
        <div className="volumeBar"></div>
        <div>
          <img src={fullScreen} alt="spotify-fullScreen" />
        </div>
      </div>
    </div>
  );
};

export default Bottombar;
