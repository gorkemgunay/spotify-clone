import React from "react";
import "./Navbar.css";
import leftArrow from "../../assets/icons/18.svg";
import rightArrow from "../../assets/icons/19.svg";
import user from "../../assets/icons/20.svg";
import dropdown from "../../assets/icons/21.svg";
import search from "../../assets/icons/2-black.svg";

interface Props {
  searchComponent?: Boolean;
}

const index: React.FC<Props> = ({ searchComponent }) => {
  return (
    <nav className="navbar">
      <div className="navbar__top--left">
        <div>
          <img src={leftArrow} alt="spotify-leftArrow" />
        </div>
        <div>
          <img src={rightArrow} alt="spotify-rightArrow" />{" "}
        </div>
        {searchComponent && (
          <div className="navbar__top--search">
            <img src={search} alt="spotify-search" />
            <input type="text" placeholder="Artist, songs, or podcasts" />
          </div>
        )}
      </div>
      <div className="navbar__top--right">
        <div>
          <img src={user} alt="spotify-user" />
        </div>
        <p>username</p>
        <img src={dropdown} alt="spotify-dropdown" />
      </div>
    </nav>
  );
};

export default index;
