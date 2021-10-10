import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";
import Bottombar from "./components/Bottombar/Bottombar";
import Content from "./components/Content/Content";

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <>
      <div className="main">
        <Sidebar />
        <Content />
      </div>

      <Bottombar />
    </>
  );
};

export default App;
