import React from "react";
import "./Content.css";
import leftArrow from "../../assets/icons/18.svg";
import rightArrow from "../../assets/icons/19.svg";
import user from "../../assets/icons/20.svg";
import dropdown from "../../assets/icons/21.svg";

interface Props {}

const Content: React.FC<Props> = () => {
  return (
    <div className="content">
      <div className="content__top">
        <div className="content__top--left">
          <div>
            <img src={leftArrow} alt="spotify-leftArrow" />
          </div>
          <div>
            <img src={rightArrow} alt="spotify-rightArrow" />{" "}
          </div>
        </div>
        <div className="content__top--right">
          <div>
            <img src={user} alt="spotify-user" />
          </div>
          <p>username</p>
          <img src={dropdown} alt="spotify-dropdown" />
        </div>
      </div>
      <div className="content__main">
        <h2>Good Morning</h2>
        <div className="content__main--songs">
          <div className="content__main--song">
            <div className="image"></div>
            <div className="song">Song Name</div>
          </div>
          <div className="content__main--song">
            <div className="image"></div>
            <div className="song">Song Name</div>
          </div>
          <div className="content__main--song">
            <div className="image"></div>
            <div className="song">Song Name</div>
          </div>
          <div className="content__main--song">
            <div className="image"></div>
            <div className="song">Song Name</div>
          </div>
          <div className="content__main--song">
            <div className="image"></div>
            <div className="song">Song Name</div>
          </div>
          <div className="content__main--song">
            <div className="image"></div>
            <div className="song">Song Name</div>
          </div>
        </div>

        <h3>Your heavy rotation</h3>
        <div className="content__main--rotations">
          <div className="content__main--rotation">
            <div className="image"></div>
            <div className="song">Song Name</div>
            <div className="artist">Artist Name</div>
          </div>
          <div className="content__main--rotation">
            <div className="image"></div>
            <div className="song">Song Name</div>
            <div className="artist">Artist Name</div>
          </div>
          <div className="content__main--rotation">
            <div className="image"></div>
            <div className="song">Song Name</div>
            <div className="artist">Artist Name</div>
          </div>
          <div className="content__main--rotation">
            <div className="image"></div>
            <div className="song">Song Name</div>
            <div className="artist">Artist Name</div>
          </div>
          <div className="content__main--rotation">
            <div className="image"></div>
            <div className="song">Song Name</div>
            <div className="artist">Artist Name</div>
          </div>
        </div>

        <h3>Populer Artists</h3>
        <div className="content__main--artists">
          <div className="content__main--artist">
            <div className="image"></div>
            <div className="song">Song Name</div>
            <div className="artist">Artist Name</div>
          </div>
          <div className="content__main--artist">
            <div className="image"></div>
            <div className="song">Song Name</div>
            <div className="artist">Artist Name</div>
          </div>
          <div className="content__main--artist">
            <div className="image"></div>
            <div className="song">Song Name</div>
            <div className="artist">Artist Name</div>
          </div>
          <div className="content__main--artist">
            <div className="image"></div>
            <div className="song">Song Name</div>
            <div className="artist">Artist Name</div>
          </div>
          <div className="content__main--artist">
            <div className="image"></div>
            <div className="song">Song Name</div>
            <div className="artist">Artist Name</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
