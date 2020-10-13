import React from "react";
import "./App.css";
import Header from "./components/Header";
import RecommendedVideos from "./components/RecommendedVideos";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from "./components/SearchPage";

function App() {
  return (
    //BEM class naming convention
    <div className="app">
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/search/:searchTerm">
            <div className="app__page">
              <Sidebar></Sidebar>
              <SearchPage></SearchPage>
            </div>
          </Route>
          <Route path="/">
            <div className="app__page">
              <Sidebar></Sidebar>
              <RecommendedVideos></RecommendedVideos>
            </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
