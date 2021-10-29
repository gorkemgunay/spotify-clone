import React from "react";
import Navbar from "../../components/Navbar";
import Slider from "../../components/Slider";
import "./Search.css";

interface Props {}

const index: React.FC<Props> = () => {
  return (
    <div className="search">
      <Navbar searchComponent={true} />
      <Slider />
    </div>
  );
};

export default index;
