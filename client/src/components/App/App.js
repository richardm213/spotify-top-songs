import React from "react";
import Login from "../Login";
import TopTracks from "../TopTracks";
import "./style.css";

const App = () => {
  const login = new URLSearchParams(window.location.search).get("login");
  return (
    <div className="app">
      {!login && <Login />}
      {login && <TopTracks />}
    </div>
  );
};

export default App;
