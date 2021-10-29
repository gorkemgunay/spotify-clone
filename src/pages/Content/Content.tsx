import React from "react";
import Navbar from "../../components/Navbar";
import "./Content.css";

interface Props {}

const Content: React.FC<Props> = () => {
  return (
    <div className="content">
      <Navbar />
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
