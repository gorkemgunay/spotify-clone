import React from "react";
import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";
import Bottombar from "./components/Bottombar/Bottombar";
import Content from "./pages/Content/Content";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";

interface Props {}

const App: React.FC<Props> = () => {
  return (
    <>
      <div className="main">
        <BrowserRouter>
          <Sidebar />
          <Switch>
            <Route exact path="/" component={Content} />
            <Route exact path="/search" component={Search} />
          </Switch>
        </BrowserRouter>
      </div>

      <Bottombar />
    </>
  );
};

export default App;
