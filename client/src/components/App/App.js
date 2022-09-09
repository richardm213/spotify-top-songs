import React from "react";
import Login from "../Login";

const App = () => {
  const login = new URLSearchParams(window.location.search).get("login");
  return <div>{!login && <Login />}</div>;
};

export default App;
