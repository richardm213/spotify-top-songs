import React from "react";
import Login from "../Login";
import TrackGrid from "../TrackGrid";
import "./style.css";

const App = () => {
  const login = new URLSearchParams(window.location.search).get("login");
  return (
    <div>
      {!login && <Login />}
      {login && <TrackGrid />}
    </div>
  );
};

export default App;
