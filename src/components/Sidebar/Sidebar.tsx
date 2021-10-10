import React from "react";
import "./Sidebar.css";

import logo from "../../assets/icons/logo.svg";
import home from "../../assets/icons/1.svg";
import search from "../../assets/icons/2.svg";
import library from "../../assets/icons/3.svg";
import add from "../../assets/icons/4.svg";
import heart from "../../assets/icons/5.svg";
import download from "../../assets/icons/6.svg";

interface Props {}

const Sidebar: React.FC<Props> = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <img src={logo} alt="spotify-logo" />
      </div>
      <div className="sidebar__menu">
        <li className="sidebar__menu--link active">
          <img src={home} alt="spotify-home" />
          <p>Home</p>
        </li>

        <li className="sidebar__menu--link">
          <img src={search} alt="spotify-search" />
          <p>Search</p>
        </li>

        <li className="sidebar__menu--link">
          <img src={library} alt="spotify-library" />
          <p>Your Library</p>
        </li>
      </div>
      <div className="sidebar__playlists">
        <div className="add">
          <div>
            <img src={add} alt="spotify-add" />
          </div>
          <p>Create Playlist</p>
        </div>

        <div className="liked">
          <div>
            <img src={heart} alt="spotify-hearth" />
          </div>
          <p>Liked Songs</p>
        </div>
      </div>

      <div className="sidebar__hr">
        <hr />
      </div>

      <div className="sidebar__list">
        <p>New Playlist #1</p>
        <p>New Playlist #1</p>
        <p>New Playlist #1</p>
        <p>New Playlist #1</p>
        <p>New Playlist #1</p>
        <p>New Playlist #1</p>
        <p>New Playlist #1</p>
        <p>New Playlist #1</p>
        <p>New Playlist #1</p>
        <p>New Playlist #1</p>
        <p>New Playlist #1</p>
        <p>New Playlist #1</p>
        <p>New Playlist #1</p>
        <p>New Playlist #1</p>
        <p>New Playlist #1</p>
        <p>New Playlist #1</p>
        <p>New Playlist #1</p>
      </div>

      <div className="sidebar__download">
        <div className="sidebar__download--div">
          <img src={download} alt="spotify-download" />
          <p>Install App</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
